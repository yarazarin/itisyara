import React, { useState, useEffect } from "react";
import "./ThirdPage.css";
import api from "../../img/api.png";
import chat from "../../img/chat.png";
import meet from "../../img/meet.png";
import myFlix from "../../img/myFlix.png";
import myAng from "../../img/myAng.png";
import todo from "../../img/todo.png";

const TirdPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(Array(6).fill(false)); // 6 cards
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Wrap 6 cards
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Wrap around 6 cards
    setFlippedCards(Array(6).fill(false));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1)); // Wrap around 6 cards
    setFlippedCards(Array(6).fill(false));
  };

  const handleCardClick = (index) => {
    if (flippedCards[index]) {
      // Card is currently flipped
      setIsAutoScrolling(true); // Resume auto-scrolling
    } else {
      setIsAutoScrolling(false); // Pause auto-scrolling
    }
    setFlippedCards((prevFlipped) =>
      prevFlipped.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped))
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false); // Stop auto-scrolling on dot click
  };

  // Card Data (using links array)
  const links = [
    {
      label: "myFlix React",
      bg: "red",
      short: "myFlix React",
      image: myFlix,
      url: "https://yaramyflix.netlify.app",
      description: [
        <>
          <h4>What I Did:</h4> Built a MERN stack app to showcase movie info
          with a secure, polished UI.
        </>,
        <>
          <h4>Skills:</h4> React, Node.js, Express, MongoDB, RESTful APIs, CSS,
          JWT Authentication, Data Validation.
        </>,
        <>
          <h4>Challenges & Wins:</h4> Mastered clean code, implemented JWT for
          secure authentication, and applied robust input validation to ensure
          user data safety.
        </>,
      ],
    },
    {
      label: "Meet App",
      bg: "#16a085",
      short: "Meet App",
      image: meet,
      url: "https://yarazarin.github.io/meet",
      description: [
        <>
          <h4>What I Did:</h4> Built a web app with Google Login, meeting
          charts, and location filtering.
        </>,
        <>
          <h4>Skills:</h4> React, Google Authentication, Jest, Enzyme, D3.js,
          PWA.
        </>,
        <>
          <h4>Challenges & Wins:</h4> Ensured seamless functionality with modern
          testing tools.
        </>,
      ],
    },
    {
      label: "myFlix Angular",
      bg: "green",
      short: "myFlix Angular",
      image: myAng,
      url: "https://yarazarin.github.io/myFlix-Angular-client/welcome",
      description: [
        <>
          <h4>What I Did:</h4> Built an Angular-based app for movie enthusiasts
          with user account features.
        </>,
        <>
          <h4>Skills:</h4> Angular, TypeScript, Angular Material, SCSS, RESTful
          APIs.
        </>,
        <>
          <h4>Challenges & Wins:</h4> Delivered an engaging experience with
          robust functionality.
        </>,
      ],
    },
    {
      label: "ToDo App",
      bg: "#8e44ad",
      short: "ToDo App",
      image: todo,
      url: "https://yarazarin.github.io/to-do-list-app",
      description: [
        <>
          <h4>What I Did:</h4> Designed a sleek task manager with local storage
          and filters.
        </>,
        <>
          <h4>Skills:</h4> JavaScript, HTML, CSS, Local Storage, Responsive
          Design.
        </>,
        <>
          <h4>Challenges & Wins:</h4> Created a super-intuitive tool for staying
          organized.
        </>,
      ],
    },
    {
      label: "R.Native Chat",
      bg: "#f39c12",
      short: "React Native Chat App",
      image: chat,
      url: "https://github.com/yarazarin/CHAT",
      description: [
        <>
          <h4>What I Did:</h4> Built a messenger app with guest login, chat, and
          camera features.
        </>,
        <>
          <h4>Skills:</h4> React Native, Expo, Firebase, Camera Integration,
          AsyncStorage.
        </>,
        <>
          <h4>Challenges & Wins:</h4> Delivered smooth communication tools with
          a friendly UI.
        </>,
      ],
    },
    {
      label: "API Project",
      bg: "#2980b9",
      short: "API Pokemon Project",
      image: api,
      url: "https://yarazarin.github.io/simple-js-app",
      description: [
        <>
          <h4>What I Did:</h4> Built a simple API explorer with Bootstrap for
          quick JSON data access.
        </>,
        <>
          <h4>Skills:</h4> JavaScript, HTML, Bootstrap, Fetch API.
        </>,
        <>
          <h4>Challenges & Wins:</h4> Created an easy-to-use interface for API
          data retrieval.
        </>,
      ],
    },
  ];

  return (
    <div className="TirdPage_container">
      <h1 className="thirdpage_title_my-projects">Would you like to explore some of my projects?</h1>

      <div
        className="arrow_third_page arrow_third_page-left"
        onClick={handlePrev}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>

      <div
        className={`tird_page-card ${
          flippedCards[currentIndex] ? "flipped" : ""
        }`}
        onClick={() => handleCardClick(currentIndex)}
        style={{ backgroundColor: links[currentIndex].bg }}
      >
        {!flippedCards[currentIndex] ? (
          <div className="card-front">
            <img
              className="card-image"
              src={links[currentIndex].image}
              alt={links[currentIndex].short}
            />
            <h3 className="thirdpage_front_card-label">
              {links[currentIndex].label}
            </h3>
          </div>
        ) : (
          <div className="card-back">
            <h3>{links[currentIndex].label}</h3>
            <div className="flip_description">
              {links[currentIndex].description}
            </div>
            <a
              href={links[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        )}
      </div>

      <div
        className="arrow_third_page arrow_third_page-right"
        onClick={handleNext}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <div className="dots-container">
        {links.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TirdPage;
