import React, { useEffect } from "react";
import "./FirstPage.css";
import yara from "../../img/yara.png";
import yara_sample_resume from "../../doc/yara_sample_resume.pdf";

const FirstPage = () => {
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
          // Check if the user is on iOS (ios and mac doesn't support the animation yet!!🤦‍♀️ so we stop observing it once it starts)
          if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            observerLeaf.unobserve(target); // stop observing once animation starts
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
  }, []);

  return (
    <section className="first page" id="sec1">

          <div className="yara-img-bg"></div>
        <div className="my-img">
          <div className="my-image-border">
          <a href="https://www.linkedin.com/in/yarazarin" target="_blank">
  <img className="my-image-inner" src={yara} alt="Yara" />
</a>
          </div>
        </div>

      <div className="title title_a">
        <span className="hi">Hi</span>
        <br />
        <br />
        <span>
          I Am Yara,
          <br />A Full Stack Web Developer
        </span>
        <br />
        <a className="resume_button" href={yara_sample_resume} download>
          Download My Resume
        </a>
        <span className="resume_button_base"></span>
      </div>
      <div className="box">
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>
    </section>
  );
};

export default FirstPage;
