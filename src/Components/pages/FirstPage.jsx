import React, { useEffect, useState } from "react";
import "./FirstPage.css";
import Yara_Zarin_Resume_7_24 from "../../doc/Yara_Zarin_Resume_7_24.pdf";
import paper from "../../sound/paper.mp3";
import Arrow from "../Arrow";
import MatrixRain from "../MatrixRain";

const textLines = ["Hello,", "I Am Yara", "A Full Stack Developer"];
const FirstPage = () => {
  const [typedText, setTypedText] = useState([]);

  useEffect(() => {
    const sectionsLeaf = [...document.querySelectorAll(".leaf")];
    const optionsLeaf = {
      rootMargin: "0px",
      threshold: 0.25,
    };

    const callbackLeaf = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.25) {
          target.classList.add("is-visible");
          if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            observerLeaf.unobserve(target);
          }
        } else {
          target.classList.remove("is-visible");
        }
      });
    };

    const observerLeaf = new IntersectionObserver(callbackLeaf, optionsLeaf);
    sectionsLeaf.forEach((section) => {
      observerLeaf.observe(section);
    });

    const typingDelay = 150; // typing speed

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
            typeText(lineIndex + 1, 0);
          }
        }, typingDelay);
      }
    };

    typeText(0, 0);

    return () => {
      observerLeaf.disconnect(); // cleanup on unmount
    };
  }, []);

  const handleButtonClick = () => {
    const audio = new Audio(paper);
    audio.play();
  };

  return (
    <section className="first page" id="sec1">
      <MatrixRain />
      <div className="title title_a">
        <div className="typed-text-container">
          {typedText.map((line, index) => (
            <p
              className={
                index === 0 ? "second-title first-title" : "second-title"
              }
              key={index}
            >
              {line}
            </p>
          ))}
        </div>
        <br />
        <br />
        <a
          className="resume_button"
          href={Yara_Zarin_Resume_7_24}
          download
          onClick={handleButtonClick}
        >
          Download My Resume
          <br />
          <i class="fa-solid fa-download"></i>
        </a>
        <span className="resume_button_base"></span>
      </div>

      <div className="box">
        {[...Array(10)].map((_, index) => (
          <div className="leaf" key={index}></div>
        ))}
      </div>
      <Arrow />
    </section>
  );
};

export default FirstPage;
