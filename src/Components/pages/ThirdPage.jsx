import React, { useState, useEffect } from "react";
import "./ThirdPage.css";
import api from "../../img/optimized/api.png";
import chat from "../../img/optimized/chat.png";
import meet from "../../img/optimized/meet.png";
import myFlix from "../../img/optimized/myFlix.png";
import myAng from "../../img/optimized/myAng.png";
import todo from "../../img/optimized/todo.png";

const ThirdPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(Array(6).fill(false));
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
      }, 5000); // Increased time to 5 seconds for better UX
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    setFlippedCards(Array(6).fill(false));
    setIsAutoScrolling(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
    setFlippedCards(Array(6).fill(false));
    setIsAutoScrolling(false);
  };

  const handleCardClick = (index) => {
    setFlippedCards((prevFlipped) =>
      prevFlipped.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped))
    );
    setIsAutoScrolling(!flippedCards[index]);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setFlippedCards(Array(6).fill(false));
    setIsAutoScrolling(false);
  };

  const links = [
    {
      label: "myFlix React",
      bg: "linear-gradient(135deg, #55efc4 0%, #00b894 100%)",
      image: myFlix,
      url: "https://yaramyflix.netlify.app",
      description: [
        <div key="what">
          <h4>What I Did:</h4>
          <p>Built a MERN stack app to showcase movie info with a secure, polished UI.</p>
        </div>,
        <div key="skills">
          <h4>Skills:</h4>
          <p>React, Node.js, Express, MongoDB, RESTful APIs, CSS, JWT Authentication, Data Validation.</p>
        </div>,
        <div key="challenges">
          <h4>Challenges & Wins:</h4>
          <p>Mastered clean code, implemented JWT for secure authentication, and applied robust input validation to ensure user data safety.</p>
        </div>,
      ],
    },
    {
      label: "Meet App",
      bg: "linear-gradient(135deg, #81ecec 0%, #00cec9 100%)",
      image: meet,
      url: "https://yarazarin.github.io/meet",
      description: [
        <div key="what">
          <h4>What I Did:</h4>
          <p>Built a web app with Google Login, meeting charts, and location filtering.</p>
        </div>,
        <div key="skills">
          <h4>Skills:</h4>
          <p>React, Google Authentication, Jest, Enzyme, D3.js, PWA.</p>
        </div>,
        <div key="challenges">
          <h4>Challenges & Wins:</h4>
          <p>Ensured seamless functionality with modern testing tools.</p>
        </div>,
      ],
    },
    {
      label: "myFlix Angular",
      bg: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
      image: myAng,
      url: "https://yarazarin.github.io/myFlix-Angular-client/welcome",
      description: [
        <div key="what">
          <h4>What I Did:</h4>
          <p>Built an Angular-based app for movie enthusiasts with user account features.</p>
        </div>,
        <div key="skills">
          <h4>Skills:</h4>
          <p>Angular, TypeScript, Angular Material, SCSS, RESTful APIs.</p>
        </div>,
        <div key="challenges">
          <h4>Challenges & Wins:</h4>
          <p>Delivered an engaging experience with robust functionality.</p>
        </div>,
      ],
    },
    {
      label: "ToDo App",
      bg: "linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)",
      image: todo,
      url: "https://yarazarin.github.io/to-do-list-app",
      description: [
        <div key="what">
          <h4>What I Did:</h4>
          <p>Designed a sleek task manager with local storage and filters.</p>
        </div>,
        <div key="skills">
          <h4>Skills:</h4>
          <p>JavaScript, HTML, CSS, Local Storage, Responsive Design.</p>
        </div>,
        <div key="challenges">
          <h4>Challenges & Wins:</h4>
          <p>Created a super-intuitive tool for staying organized.</p>
        </div>,
      ],
    },
    {
      label: "React Native Chat",
      bg: "linear-gradient(135deg, #ff7675 0%, #d63031 100%)",
      image: chat,
      url: "https://github.com/yarazarin/CHAT",
      description: [
        <div key="what">
          <h4>What I Did:</h4>
          <p>Built a messenger app with guest login, chat, and camera features.</p>
        </div>,
        <div key="skills">
          <h4>Skills:</h4>
          <p>React Native, Expo, Firebase, Camera Integration, AsyncStorage.</p>
        </div>,
        <div key="challenges">
          <h4>Challenges & Wins:</h4>
          <p>Delivered smooth communication tools with a friendly UI.</p>
        </div>,
      ],
    },
    {
      label: "API Project",
      bg: "linear-gradient(135deg, #e84393 0%, #b71540 100%)",
      image: api,
      url: "https://yarazarin.github.io/simple-js-app",
      description: [
        <div key="what">
          <h4>What I Did:</h4>
          <p>Built a simple API explorer with Bootstrap for quick JSON data access.</p>
        </div>,
        <div key="skills">
          <h4>Skills:</h4>
          <p>JavaScript, HTML, Bootstrap, Fetch API.</p>
        </div>,
        <div key="challenges">
          <h4>Challenges & Wins:</h4>
          <p>Created an easy-to-use interface for API data retrieval.</p>
        </div>,
      ],
    },
  ];

  return (
    <div className="TirdPage_container">
      <h1 className="thirdpage_title_my-projects">
        Explore My Project Portfolio
      </h1>

      <div
        className={`tird_page-card ${flippedCards[currentIndex] ? "flipped" : ""}`}
        onClick={() => handleCardClick(currentIndex)}
        style={{ background: links[currentIndex].bg }}
      >
        <div className="card-front">
          <div 
            className="card-front-frame"
            style={{
              backgroundImage: `url(${links[currentIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="card-content">
              <img
                className="card-image"
                src={links[currentIndex].image}
                alt={links[currentIndex].label}
              />
              <h3 className="thirdpage_front_card-label">
                {links[currentIndex].label}
              </h3>
            </div>
          </div>
        </div>
        <div className="card-back">
          <h3>{links[currentIndex].label}</h3>
          <div className="flip_description">
            {links[currentIndex].description}
          </div>
          <a
            href={links[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Project
          </a>
        </div>
      </div>

      <div className="arrow_third_page arrow_third_page-left" onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>

      <div className="arrow_third_page arrow_third_page-right" onClick={handleNext}>
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

export default ThirdPage;
