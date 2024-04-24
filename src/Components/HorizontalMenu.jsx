import React, { useEffect } from "react";
import "./HorizontalMenu.css";
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
import tr from "../img/logo/tr.png";
import pm from "../img/logo/pm.png";

const HorizontalMenuCarousel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller_carousel");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(
          ".scroller__inner_carousel"
        );
        const scrollerContent = Array.from(scrollerInner.children);
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
          <li>JavaScript</li>
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
          <li>G.Firebase</li>
          <li>Git</li>
          <li>Github</li>
          <li>Heroku</li>
          <li>Postman</li>
          <li>Photoshop</li>
          <li>Indesign</li>
          <li>Figma</li>
          <li>Canva</li>
          <li>G.Work</li>
          <li>Linux</li>
          <li>MacOS</li>
          <li>Windows</li>
          <li>IOS</li>
          <li>Android</li>
          <li>MS.Office</li>
          <li>Trello</li>
        </ul>
      </div>
      <div
        className="scroller_carousel"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner_carousel scroller__inner_carousel-background">
          <img src={aw} alt="AWS" />
          <img src={git} alt="Git" />
          <img src={gh} alt="GitHub" />
          <img src={ht} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={sc} alt="SCSS" />
          <img src={bs} alt="Bootstrap" />
          <img src={js} alt="JavaScript" />
          <img src={nj} alt="NodeJS" />
          <img src={re} alt="React" />
          <img src={rn} alt="React Native" />
          <img src={ex} alt="Express" />
          <img src={ang} alt="Angular" />
          <img src={hk} alt="Heroku" />
          <img src={pm} alt="Postman" />
          <img src={mdb} alt="MongoDB" />
          <img src={fb} alt="Firebase" />
          <img src={jq} alt="JQuery" />
          <img src={gs} alt="Google Workspace" />
          <img src={ind} alt="Indesign" />
          <img src={ps} alt="Photoshop" />
          <img src={tr} alt="Trello" />
        </div>
      </div>
    </>
  );
};

export default HorizontalMenuCarousel;
