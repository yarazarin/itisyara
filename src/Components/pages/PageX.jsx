import React, { useState, useEffect } from "react";
import "./PageX.css";

const PageX = ({ onBack }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleBackClick = () => {
        setIsVisible(false);
        setTimeout(() => {
            if (onBack) {
                onBack();
            }
        }, 800);
    };

    return (
        <div
            className={`pageX ${
                isVisible ? "visible" : ""
            }`}
        >
            <button
                className="backToMainButton"
                onClick={handleBackClick}
            >
                <i className="fas fa-home"></i>
                <span className="nav-label">Home</span>
            </button>
        </div>
    );
};

export default PageX;
