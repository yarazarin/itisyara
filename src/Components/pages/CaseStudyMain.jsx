import React, { useState, useEffect, useRef } from 'react';
import './CaseStudyMain.css';
import penImage from '../../img/pen.png';
import {
    Page1, Page2, Page3, Page4, Page5,
    Page6, Page7, Page8, Page9, Page10
} from './CaseStudyPages';

const caseStudyPages = [
    <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />,
    <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />
];

const CaseStudyMain = ({ onBack }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);
    const accumulatedScrollRef = useRef(0);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            accumulatedScrollRef.current += e.deltaY;
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    useEffect(() => {
        let animationId;
        const animate = () => {
            if (accumulatedScrollRef.current !== 0) {
                const scrollAmount = accumulatedScrollRef.current / 2000; // Slow down the scroll
                setCurrentSection(prev => Math.max(0, Math.min(prev + scrollAmount, caseStudyPages.length - 1)));
                accumulatedScrollRef.current *= 0.95; // Dampen the accumulated scroll
            }
            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const handleBackClick = () => {
        if (onBack) {
            onBack();
        }
    };

    return (
        <>
        {currentSection >= 1 && (
                <img
                    src={penImage}
                    alt="pen"
                    className="scrolling-pen"
                    style={{
                        transform: `rotateX(${currentSection * 36}deg) translateX(${((currentSection - 1) / 8) * 68}vw)`,
                        width: '150px',
                        height: 'auto'
                    }}
                />
            )}
        <div className="case-study-page" ref={containerRef}>
            <button className="back-button" onClick={handleBackClick}>
                ← Back
            </button>

            <div className="sections-container" style={{ transform: `translateX(-${currentSection * 100}vw)`, backgroundPosition: `${100 + currentSection * 30}vw 0` }}>
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
                        className={`indicator ${index === Math.round(currentSection) ? 'active' : ''}`}
                        onClick={() => setCurrentSection(index)}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default CaseStudyMain;
