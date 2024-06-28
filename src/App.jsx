import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar";
import SecondPage from "./Components/pages/SecondPage";
import ThirdPage from "./Components/pages/ThirdPage";
import ContactForm from "./Components/pages/ContactForm";
import FirstPage from "./Components/pages/FirstPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [setIsScrolling] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    const sections = [...document.querySelectorAll("section")];
    let options = {
      rootMargin: "0px",
      threshold: 0.25,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.25) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => {
      observer.observe(section);
    });

    const Slider = function (
      pages,
      dotdot,
      setCurrentPage,
      setIsScrolling
    ) {
      let slides = [],
        btns = [],
        count = 0,
        current = 0,
        touchstart = 0,
        animation_state = false;

      const init = () => {
        slides = pages.children;
        count = slides.length;
        for (let i = 0; i < count; i++) {
          slides[i].style.bottom = -(i * 100) + "%";
          let btn = document.createElement("li");
          btn.dataset.slide = i;
          btn.addEventListener("click", btnClick);
          btns.push(btn);
          dotdot.appendChild(btn);
        }
        btns[0].classList.add("active");
      };

      const gotoNum = (index) => {
        if (index !== current && !animation_state) {
          animation_state = true;
          setIsScrolling(true);
          setTimeout(() => {
            animation_state = false;
            setIsScrolling(false);
          }, 500);
          btns[current].classList.remove("active");
          current = index;
          btns[current].classList.add("active");
          for (let i = 0; i < count; i++) {
            slides[i].style.bottom = (current - i) * 100 + "%";
          }
          setCurrentPage(current); // Update currentPage state
        }
      };

      const gotoNext = () => {
        return current < count - 1 ? gotoNum(current + 1) : false;
      };
      const gotoPrev = () => {
        return current > 0 ? gotoNum(current - 1) : false;
      };
      const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
      pages.ontouchstart = (e) => (touchstart = e.touches[0].screenY);
      pages.ontouchend = (e) => {
        const touchend = e.changedTouches[0].screenY;
        const touchDifference = Math.abs(touchstart - touchend);
        if (touchDifference < 5) {
          return;
        }
        return touchstart < touchend ? gotoPrev() : gotoNext();
      };
      pages.onmousewheel = pages.onwheel = (e) => {
        return e.deltaY < 0 ? gotoPrev() : gotoNext();
      };

      init();
      this.gotoNum = gotoNum;
    };

    let pages = document.querySelector(".pages");
    let dotdot = document.querySelector(".dotdot");
    sliderRef.current = new Slider(
      pages,
      dotdot,
      setCurrentPage,
      setIsScrolling
    ); // Pass setIsScrolling to Slider
  }, []);

  const scrollTo = (id, pageIndex) => {
    sliderRef.current.gotoNum(pageIndex);
  };

  return (
    <>
      <Navbar
        setCurrentPage={setCurrentPage}
        scrollTo={scrollTo}
        currentPage={currentPage}
      />
      <div
        className="pages"
        style={{ position: "relative", zIndex: 0, background: "white" }}
      >
        <FirstPage />
        <section className="second page" id="sec2">
          <SecondPage />
        </section>
        <section className="third page" id="sec3">
          <h2 className="title title_d">
            <ThirdPage />
          </h2>
        </section>
        <section className="fourth page" id="sec4">
          <ContactForm />
        </section>
      </div>
      <ul className="dotdot"></ul>
      <Footer />
    </>
  );
};

export default App;