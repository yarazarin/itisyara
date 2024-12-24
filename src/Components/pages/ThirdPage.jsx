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
      bg: "#55efc4",
      short: "myFlix React",
      image: myFlix,
      url: "https://yaramyflix.netlify.app",
      description: [
        <div>
          <h4>What I Did:</h4>
          <p>Built a MERN stack app to showcase movie info with a secure, polished UI.</p>
        </div>,
        <div>
          <h4>Skills:</h4>
          <p>React, Node.js, Express, MongoDB, RESTful APIs, CSS, JWT Authentication, Data Validation.</p>
        </div>,
        <div>
          <h4>Challenges & Wins:</h4>
          <p>Mastered clean code, implemented JWT for secure authentication, and applied robust input validation to ensure user data safety.</p>
        </div>,
      ],
    },
    {
      label: "Meet App",
      bg: "#81ecec",
      short: "Meet App",
      image: meet,
      url: "https://yarazarin.github.io/meet",
      description: [
        <div>
          <h4>What I Did:</h4>
          <p>Built a web app with Google Login, meeting charts, and location filtering.</p>
        </div>,
        <div>
          <h4>Skills:</h4>
          <p>React, Google Authentication, Jest, Enzyme, D3.js, PWA.</p>
        </div>,
        <div>
          <h4>Challenges & Wins:</h4>
          <p>Ensured seamless functionality with modern testing tools.</p>
        </div>,
      ],
    },
    {
      label: "myFlix Angular",
      bg: "#74b9ff",
      short: "myFlix Angular",
      image: myAng,
      url: "https://yarazarin.github.io/myFlix-Angular-client/welcome",
      description: [
        <div>
          <h4>What I Did:</h4>
          <p>Built an Angular-based app for movie enthusiasts with user account features.</p>
        </div>,
        <div>
          <h4>Skills:</h4>
          <p>Angular, TypeScript, Angular Material, SCSS, RESTful APIs.</p>
        </div>,
        <div>
          <h4>Challenges & Wins:</h4>
          <p>Delivered an engaging experience with robust functionality.</p>
        </div>,
      ],
    },
    {
      label: "ToDo App",
      bg: "#a29bfe",
      short: "ToDo App",
      image: todo,
      url: "https://yarazarin.github.io/to-do-list-app",
      description: [
        <div>
          <h4>What I Did:</h4>
          <p>Designed a sleek task manager with local storage and filters.</p>
        </div>,
        <div>
          <h4>Skills:</h4>
          <p>JavaScript, HTML, CSS, Local Storage, Responsive Design.</p>
        </div>,
        <div>
          <h4>Challenges & Wins:</h4>
          <p>Created a super-intuitive tool for staying organized.</p>
        </div>,
      ],
    },
    {
      label: "R.Native Chat",
      bg: "#ff7675",
      short: "React Native Chat App",
      image: chat,
      url: "https://github.com/yarazarin/CHAT",
      description: [
        <div>
          <h4>What I Did:</h4>
          <p>Built a messenger app with guest login, chat, and camera features.</p>
        </div>,
        <div>
          <h4>Skills:</h4>
          <p>React Native, Expo, Firebase, Camera Integration, AsyncStorage.</p>
        </div>,
        <div>
          <h4>Challenges & Wins:</h4>
          <p>Delivered smooth communication tools with a friendly UI.</p>
        </div>,
      ],
    },
    {
      label: "API Project",
      bg: "#e84393",
      short: "API Pokemon Project",
      image: api,
      url: "https://yarazarin.github.io/simple-js-app",
      description: [
        <div>
          <h4>What I Did:</h4>
          <p>Built a simple API explorer with Bootstrap for quick JSON data access.</p>
        </div>,
        <div>
          <h4>Skills:</h4>
          <p>JavaScript, HTML, Bootstrap, Fetch API.</p>
        </div>,
        <div>
          <h4>Challenges & Wins:</h4>
          <p>Created an easy-to-use interface for API data retrieval.</p>
        </div>,
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
            <div className="card-front-frame">
            <img
              className="card-image"
              src={links[currentIndex].image}
              alt={links[currentIndex].short}
            />
            <h3 className="thirdpage_front_card-label">
              {links[currentIndex].label}
            </h3>
            </div>
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
