import React, { useEffect, useState } from "react";
import "./FirstPage.css";
import Yara_Zarin_Resume from "../../doc/Yara_Zarin_Resume.pdf";
import arrow from "../../img/arrow.png";
import Door from "../Door.jsx";

const textLines = [
    "Hi,",
    "I Am Yara\nA Full Stack Developer\nWanna try a new experience?",
];

const FirstPage = ({ onDoorClick }) => {
    const [typedText, setTypedText] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] =
        useState(0);
    const [currentCharIndex, setCurrentCharIndex] =
        useState(0);
    const [showArrow, setShowArrow] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const handlePageClick = () => {
        if (isTyping) {
            setTypedText(textLines);
            setCurrentLineIndex(textLines.length);
            setCurrentCharIndex(0);
            setIsTyping(false);
            setShowArrow(true);
        }
    };

    useEffect(() => {
        const typingDelay = 80;
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
                    // Move to next line
                    setCurrentLineIndex((prev) => prev + 1);
                    setCurrentCharIndex(0);
                    timeoutId = setTimeout(
                        typeText,
                        typingDelay
                    );
                }
            } else {
                // All lines typed
                setIsTyping(false);
                setShowArrow(true);
            }
        };

        if (isTyping) {
            timeoutId = setTimeout(typeText, typingDelay);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [currentLineIndex, currentCharIndex, isTyping]);

    return (
        <>
            <section
                className="first page"
                id="sec1"
                onClick={handlePageClick}
            >
                <Door onDoorClick={onDoorClick} />
                <div className="title title_a">
                    <div className="typed-text-container">
                        {typedText.map((line, index) => (
                            <p
                                className={
                                    index === 0
                                        ? "second-title first-title typing-line"
                                        : index ===
                                          textLines.length -
                                              1
                                        ? "if_you second-title typing-line"
                                        : "second-title typing-line"
                                }
                                key={index}
                            >
                                {line
                                    .split("\n")
                                    .map(
                                        (
                                            textPart,
                                            partIndex
                                        ) => (
                                            <React.Fragment
                                                key={
                                                    partIndex
                                                }
                                            >
                                                {textPart}
                                                {((index ===
                                                    currentLineIndex &&
                                                    partIndex ===
                                                        line.split(
                                                            "\n"
                                                        )
                                                            .length -
                                                            1 &&
                                                    currentCharIndex <
                                                        textLines[
                                                            currentLineIndex
                                                        ]
                                                            ?.length &&
                                                    isTyping) ||
                                                    (!isTyping &&
                                                        index ===
                                                            typedText.length -
                                                                1 &&
                                                        partIndex ===
                                                            line.split(
                                                                "\n"
                                                            )
                                                                .length -
                                                                1)) && (
                                                        <span className="typing-cursor">
                                                            |
                                                        </span>
                                                    )}
                                                {partIndex <
                                                    line.split(
                                                        "\n"
                                                    )
                                                        .length -
                                                        1 && (
                                                    <br />
                                                )}
                                            </React.Fragment>
                                        )
                                    )}
                            </p>
                        ))}
                    {showArrow && (
                        <>
                            <img
                                src={arrow}
                                className="arrow_door"
                                alt="Arrow pointing to the door"
                            />
                        </>
                    )}
                    </div>

                    <br />
                    <br />
                    <span className="resume_button_base"></span>
                </div>
                    <a
                        className="resume_button btn-shine"
                        href={Yara_Zarin_Resume}
                        download
                    >
                        My Resume
                        <i
                            className="fa-solid fa-download"
                            style={{ marginLeft: "10px" }}
                        ></i>
                    </a>
            </section>
        </>
    );
};

export default FirstPage;
