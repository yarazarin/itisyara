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

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            // Use deltaY for proportional scrolling - typically 100-120 per wheel notch
            const scrollAmount = e.deltaY / 300; // Adjust divisor for scroll sensitivity
            setCurrentSection(prev => Math.max(0, Math.min(prev + scrollAmount, caseStudyPages.length - 1)));
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
