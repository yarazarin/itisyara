import React, { useState, useEffect } from "react";
import "./PageX.css";
import MatrixRain from "../MatrixRain";

const textLines = [
    "It all started on a rainy evening when my client said",
    <br />,
    "“I don’t just want a blog; I want a living journal of my thoughts.”",
    <br />,
    " I knew a simple template wouldn’t be enough, so I decided to build a custom MERN application from scratch,",
    " something that could grow with their ideas instead of limiting them.",
];

const PageX = ({ onBack, onNext }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] =
        useState(0);
    const [currentCharIndex, setCurrentCharIndex] =
        useState(0);
    const [showNext, setShowNext] = useState(false);
    const [isTyping, setIsTyping] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const typingDelay = 50;
        let timeoutId;

        const typeText = () => {
            if (currentLineIndex < textLines.length) {
                const line = textLines[currentLineIndex];

                if (currentCharIndex < line.length) {
                    setTypedText((prevTypedText) => {
                        const newTypedText = [
                            ...prevTypedText,
                        ];
                        if (
                            !newTypedText[currentLineIndex]
                        ) {
                            newTypedText[currentLineIndex] =
                                "";
                        }
                        newTypedText[currentLineIndex] =
                            line.slice(
                                0,
                                currentCharIndex + 1
                            );
                        return newTypedText;
                    });

                    setCurrentCharIndex((prev) => prev + 1);
                    timeoutId = setTimeout(
                        typeText,
                        typingDelay
                    );
                } else {
                    setCurrentLineIndex((prev) => prev + 1);
                    setCurrentCharIndex(0);
                    timeoutId = setTimeout(
                        typeText,
                        typingDelay
                    );
                }
            } else {
                setIsTyping(false);
                setShowNext(true);
            }
        };

        if (isTyping) {
            timeoutId = setTimeout(typeText, typingDelay);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [currentLineIndex, currentCharIndex, isTyping]);

    const handleBackClick = (e) => {
        e.stopPropagation();
        setIsVisible(false);
        setTimeout(() => {
            if (onBack) {
                onBack();
            }
        }, 800);
    };

    const handlePageClick = () => {
        if (isTyping) {
            setTypedText(textLines);
            setCurrentLineIndex(textLines.length);
            setCurrentCharIndex(0);
            setIsTyping(false);
            setShowNext(true);
        }
    };

    return (
        <div
            className={`pageX ${
                isVisible ? "visible" : ""
            }`}
            onClick={handlePageClick}
        >
            <button
                className="backToMainButton"
                onClick={handleBackClick}
            >
                <i className="fas fa-home"></i>
                <span className="nav-label">Back Home</span>
            </button>
            <div className="title title_a pagex_title">
                <div className="text-box">
                    <div className="typed-text-container typed-text-container-2">
                        {typedText.map((line, index) => (
                            <p
                                className="second-title typing-line"
                                key={index}
                            >
                                {line}
                                {((index ===
                                    currentLineIndex &&
                                    currentCharIndex <
                                        textLines[
                                            currentLineIndex
                                        ]?.length &&
                                    isTyping) ||
                                    (!isTyping &&
                                        index ===
                                            typedText.length -
                                                1)) && (
                                    <span className="typing-cursor">
                                        |
                                    </span>
                                )}
                            </p>
                        ))}
                        {showNext && (
                            <button
                                className="nextButton"
                                onMouseEnter={() =>
                                    setIsHovered(true)
                                }
                                onMouseLeave={() =>
                                    setIsHovered(false)
                                }
                                onClick={onNext}
                            >
                                <div
                                    style={{
                                        position:
                                            "relative",
                                    }}
                                >
                                    <span
                                        style={{
                                            position:
                                                "absolute",
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            display: "flex",
                                            alignItems:
                                                "center",
                                            justifyContent:
                                                "center",
                                            opacity:
                                                isHovered
                                                    ? 0
                                                    : 1,
                                            transition:
                                                "opacity 0.8s ease",
                                        }}
                                    >
                                        next?
                                    </span>
                                    <span
                                        style={{
                                            position:
                                                "absolute",
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            display: "flex",
                                            alignItems:
                                                "center",
                                            justifyContent:
                                                "center",
                                            opacity:
                                                isHovered
                                                    ? 1
                                                    : 0,
                                            transition:
                                                "opacity 0.8s ease",
                                        }}
                                    >
                                        YES!
                                    </span>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <MatrixRain isHovered={isHovered} />
        </div>
    );
};

export default PageX;
