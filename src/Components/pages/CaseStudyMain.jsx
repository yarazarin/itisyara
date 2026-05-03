import React, { useState, useEffect, useRef } from "react";
import "./CaseStudyMain.css";
import penImage from "../../img/pen.png";
import {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
} from "./CaseStudyPages";

const caseStudyPages = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
    <Page5 />,
    <Page6 />,
    <Page7 />,
    <Page8 />,
    <Page9 />,
];

const CaseStudyMain = ({ onBack }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [displaySection, setDisplaySection] = useState(0);
    const containerRef = useRef(null);
    const touchStartRef = useRef(null);
    const touchStartYRef = useRef(null);
    const isScrolling = useRef(false);

    const goToSection = (index) => {
        setCurrentSection((prev) => {
            const newIndex = Math.max(0, Math.min(index, caseStudyPages.length - 1));
            return newIndex;
        });
    };

    // Smooth lerp loop – runs every frame, no snap/jump at end
    useEffect(() => {
        let rafId;
        const lerp = (a, b, t) => a + (b - a) * t;

        const tick = () => {
            setDisplaySection((prev) => {
                const next = lerp(prev, currentSection, 0.06);
                // If we are *extremely* close, just lock to target so we
                // don't waste micro-updates, but do it so close the user
                // will never perceive a jump.
                return Math.abs(next - currentSection) < 0.0001
                    ? currentSection
                    : next;
            });
            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [currentSection]);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            if (isScrolling.current) return;

            isScrolling.current = true;
            setTimeout(() => {
                isScrolling.current = false;
            }, 600);

            if (e.deltaY > 0) {
                goToSection(currentSection + 1);
            } else if (e.deltaY < 0) {
                goToSection(currentSection - 1);
            }
        };

        const handleTouchStart = (e) => {
            touchStartRef.current = e.touches[0].clientX;
            touchStartYRef.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (touchStartRef.current === null) return;
            e.preventDefault();
        };

        const handleTouchEnd = (e) => {
            if (touchStartRef.current === null) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = touchStartRef.current - endX;
            const diffY = touchStartYRef.current - endY;

            touchStartRef.current = null;
            touchStartYRef.current = null;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    goToSection(currentSection + 1);
                } else {
                    goToSection(currentSection - 1);
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel, { passive: false });
            container.addEventListener("touchstart", handleTouchStart, { passive: true });
            container.addEventListener("touchmove", handleTouchMove, { passive: false });
            container.addEventListener("touchend", handleTouchEnd, { passive: true });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
                container.removeEventListener("touchstart", handleTouchStart);
                container.removeEventListener("touchmove", handleTouchMove);
                container.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, [currentSection]);

    const handleBackClick = () => {
        if (onBack) {
            onBack();
        }
    };

    return (
        <>
            {displaySection >= 1 && (
                <img
                    src={penImage}
                    alt="pen"
                    className="scrolling-pen"
                    style={{
                        transform: `rotateX(${displaySection * 36}deg) translateX(${((displaySection - 1) / 8) * 68}vw)`,
                        width: "150px",
                        height: "auto",
                    }}
                />
            )}
            <div className="case-study-page" ref={containerRef}>
                <button className="back-button" onClick={handleBackClick}>
                    ← Back
                </button>

                <div
                    className="sections-container"
                    style={{
                        transform: `translateX(-${displaySection * 100}vw)`,
                        backgroundPosition: `${100 + displaySection * 30}vw 0`,
                    }}
                >
                    {caseStudyPages.map((pageComponent, index) => (
                        <div key={index} className="section">
                            <div className="section-content">
                                {pageComponent}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="progress-indicators">
                    {caseStudyPages.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === Math.round(displaySection) ? "active" : ""}`}
                            onClick={() => setCurrentSection(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CaseStudyMain;
