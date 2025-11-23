import React, { useEffect, useState } from "react";
import "./FirstPage.css";
import Yara_Zarin_Resume from "../../doc/Yara_Zarin_Resume_2025_.pdf";
import MatrixRain from "../MatrixRain";
import arrow from "../../img/arrow.png";
import Door from "../Door.jsx";

const textLines = [
    "Hello,",
    "I Am Yara",
    "A Full Stack Developer",
    "Wanna try a new experience?",
];

const FirstPage = () => {
    const [typedText, setTypedText] = useState([]);
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const sectionsLeaf = [
            ...document.querySelectorAll(".leaf"),
        ];
        const optionsLeaf = {
            rootMargin: "0px",
            threshold: 0.25,
        };

        const callbackLeaf = (entries) => {
            entries.forEach((entry) => {
                const { target } = entry;
                if (entry.intersectionRatio >= 0.25) {
                    target.classList.add("is-visible");
                    if (
                        /iPad|iPhone|iPod/.test(
                            navigator.userAgent
                        )
                    ) {
                        observerLeaf.unobserve(target);
                    }
                } else {
                    target.classList.remove("is-visible");
                }
            });
        };

        const observerLeaf = new IntersectionObserver(
            callbackLeaf,
            optionsLeaf
        );
        sectionsLeaf.forEach((section) => {
            observerLeaf.observe(section);
        });

        const typingDelay = 120;

        const typeText = (lineIndex, charIndex) => {
            if (lineIndex < textLines.length) {
                const line = textLines[lineIndex];
                setTimeout(() => {
                    setTypedText((prevTypedText) => [
                        ...prevTypedText.slice(0, lineIndex),
                        line.slice(0, charIndex + 1),
                        ...prevTypedText.slice(lineIndex + 1),
                    ]);
                    
                    if (charIndex < line.length - 1) {
                        typeText(lineIndex, charIndex + 1);
                    } else {
                        // When the last line is fully typed, show the arrow
                        if (lineIndex === textLines.length - 1) {
                            setShowArrow(true);
                        }
                        typeText(lineIndex + 1, 0);
                    }
                }, typingDelay);
            }
        };

        typeText(0, 0);

        return () => {
            observerLeaf.disconnect();
        };
    }, []);

    return (
        <>
            <section className="first page" id="sec1">
                <Door />
                
                <div className="title title_a">
                    <div className="typed-text-container">
                        {typedText.map((line, index) => (
                            <p
                                className={
                                    index === 0 
                                        ? "second-title first-title" 
                                        : index === textLines.length - 1 
                                            ? "if_you second-title"
                                            : "second-title"
                                }
                                key={index}
                            >
                                {line}
                            </p>
                        ))}
                    </div>

                    {/* Arrow appears only after typing is complete */}
                    {showArrow && (
                        <>
                            <img src={arrow} className="arrow_from-door" alt="Arrow pointing to door" />
                            <div className="arrow_to-door"></div>
                        </>
                    )}

                    <br />
                    <br />
                    <a
                        className="resume_button"
                        href={Yara_Zarin_Resume}
                        download
                    >
                        Download My Resume
                        <br />
                        <i className="fa-solid fa-download"></i>
                    </a>
                    <span className="resume_button_base"></span>
                </div>

                {/* Optional: Uncomment if needed */}
                {/* <MatrixRain /> */}
                {/* <div className="box">
                    {[...Array(10)].map((_, index) => (
                        <div
                            className="leaf"
                            key={index}
                        ></div>
                    ))}
                </div> */}
            </section>
        </>
    );
};

export default FirstPage;