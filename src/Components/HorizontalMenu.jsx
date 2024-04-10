import React, { useEffect } from "react";
import "./HorizontalMenu.css"; // Import your CSS file for styling
import ang from "../img/logo/ang.png";
import aw from "../img/logo/aw.png";
import bs from "../img/logo/bs.png";
import css from "../img/logo/css.png";
import ex from "../img/logo/ex.png";
import fb from "../img/logo/fb.png";
import gh from "../img/logo/gh.png";
import git from "../img/logo/git.png";
import gs from "../img/logo/gs.png";
import ht from "../img/logo/ht.png";
import ind from "../img/logo/ind.png";
import jq from "../img/logo/jq.png";
import js from "../img/logo/js.png";
import mdb from "../img/logo/mdb.png";
import nj from "../img/logo/nj.png";
import ps from "../img/logo/ps.png";
import re from "../img/logo/re.png";
import rn from "../img/logo/rn.png";
import sc from "../img/logo/sc.png";
import hk from "../img/logo/hk.png";

const HorizontalMenuCarousel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller_carousel");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(
          ".scroller__inner_carousel"
        );
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="scroller_carousel" data-speed="slow">
        <ul className="tag-list scroller__inner_carousel">
          <li>Html</li>
          <li>Css</li>
          <li>Scss</li>
          <li>Javascript</li>
          <li>React</li>
          <li>React.Native</li>
          <li>Node.Js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Angular</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>AWS</li>
          <li>EC2</li>
          <li>Lambda</li>
          <li>S3</li>
          <li>Serverless</li>
          <li>GoogleFirestore</li>
          <li>Git</li>
          <li>Github</li>
          <li>Heroku</li>
          <li>Postman</li>
          <li>AdobePhotoshop</li>
          <li>AdobeIndesign</li>
          <li>Figma</li>
          <li>Canva</li>
          <li>GoogleWork</li>
          <li>Linux</li>
          <li>MacOS</li>
          <li>Windows</li>
          <li>IOS</li>
          <li>Android</li>
          <li>Microsoft Office</li>
          <li>Zoom</li>
          <li>Teams</li>
          <li>Slack</li>
        </ul>
      </div>
      <div
        className="scroller_carousel"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner_carousel scroller__inner_carousel-background">
          <img src={js} alt="" style={{ height: "50px" }} />
          <img src={ex} alt="" style={{ height: "50px" }} />
          <img src={fb} alt="" style={{ height: "50px" }} />
          <img src={gh} alt="" style={{ height: "50px" }} />
          <img src={git} alt="" style={{ height: "50px" }} />
          <img src={gs} alt="" style={{ height: "50px" }} />
          <img src={ind} alt="" style={{ height: "50px" }} />
          <img src={jq} alt="" style={{ height: "50px" }} />
          <img src={mdb} alt="" style={{ height: "50px" }} />
          <img src={nj} alt="" style={{ height: "50px" }} />
          <img src={ps} alt="" style={{ height: "50px" }} />
          <img src={re} alt="" style={{ height: "50px" }} />
          <img src={rn} alt="" style={{ height: "50px" }} />
          <img src={sc} alt="" style={{ height: "50px" }} />
          <img src={ang} alt="" style={{ height: "50px" }} />
          <img src={aw} alt="" style={{ height: "50px" }} />
          <img src={bs} alt="" style={{ height: "50px" }} />
          <img src={hk} alt="" style={{ height: "50px" }} />
          <img src={css} alt="" style={{ height: "50px" }} />
          <img src={ht} alt="" style={{ height: "50px" }} />
        </div>
      </div>
    </>
  );
};

export default HorizontalMenuCarousel;
