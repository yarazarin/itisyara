import React, { useState, useEffect, useRef } from 'react';
import './CaseStudyPage.css';
import {
    Page1, Page2, Page3, Page4, Page5,
    Page6, Page7, Page8, Page9, Page10
} from './CaseStudyPages';

const caseStudyPages = [
    <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />,
    <Page6 />, <Page7 />, <Page8 />, <Page9 />, <Page10 />
];

const CaseStudyPage = ({ onBack }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                // Scroll down/right
                setCurrentSection(prev => Math.min(prev + 1, caseStudyPages.length - 1));
            } else {
                // Scroll up/left
                setCurrentSection(prev => Math.max(prev - 1, 0));
            }
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
        <div className="case-study-page" ref={containerRef}>
            <button className="back-button" onClick={handleBackClick}>
                ← Back
            </button>
            <div className="sections-container" style={{ transform: `translateX(-${currentSection * 100}vw)` }}>
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
                        className={`indicator ${index === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CaseStudyPage;
