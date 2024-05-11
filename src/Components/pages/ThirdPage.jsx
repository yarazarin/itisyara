import React, { useState, useEffect } from "react";
import "./ThirdPage.css";
import api from "../../img/api.png";
import chat from "../../img/chat.png";
import meet from "../../img/meet.png";
import myFlix from "../../img/myFlix.png";
import myAng from "../../img/myAng.png";
import todo from "../../img/todo.png";
import moon from "../../img/moon.png";

const ThirdPage = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [infoBoxHovered, setInfoBoxHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = windowHeight * 1;
  const totalArea = 100;
  const increment = totalArea / 5;
  const startPoint = 0 - totalArea / 2;

  const links = [
    {
      label: "myFlix React",
      bg: "#c0392b",
      description: "myFlix React",
      image: myFlix,
      url: "https://yaramyflix.netlify.app",
      description: [
        <>
          <h4>Introduction:</h4> myFlix is a MERN stack application showcasing
          my full-stack JavaScript skills.
        </>,
        <>
          <h4>Challenge:</h4> The goal was to build a robust, user-friendly web
          application.
        </>,
        <>
          <h4>Approach:</h4> I constructed a RESTful API using Node.js, Express,
          and MongoDB. The client-side interface was built with React.
        </>,
        <>
          <h4>Results:</h4> Overcame challenges in crafting clean code and
          ensuring robust security measures.
        </>,
      ],
    },
    {
      label: "Meet App",
      bg: "#16a085",
      description: "Meet App",
      image: meet,
      url: "https://yarazarin.github.io/meet",
      description: [
        <>
          <h4>Introduction:</h4> This is a web application that utilizes Google
          Authentication.
        </>,
        <>
          <h4>Challenge:</h4> The goal was to create a platform where users can
          log in, view a chart of meetings, and search and filter cities.
        </>,
        <>
          <h4>Approach:</h4> The application was built using modern testing
          technologies to ensure reliability and performance.
        </>,
        <>
          <h4>Results:</h4> Successfully created a user-friendly platform with
          Google Authentication, meeting charts, and city search and filter
          functionalities.
        </>,
      ],
    },
    {
      label: "myFlix Angular",
      bg: "#27ae60",
      description: "myFlix Angular",
      image: myAng,
      url: "https://yarazarin.github.io/myFlix-Angular-client/welcome",
      description: [
        <>
          <h4>Introduction:</h4> myFlix Angular is a web application providing
          comprehensive movie information.
        </>,
        <>
          <h4>Challenge:</h4> The goal was to create a platform where users can
          access information about different movies, directors, and genres.
        </>,
        <>
          <h4>Approach:</h4> The application was built using Angular, allowing
          users to sign up, update their personal information, and create a list
          of their favorite movies.
        </>,
        <>
          <h4>Results:</h4> Successfully created a user-friendly platform for
          movie enthusiasts.
        </>,
      ],
    },
    {
      label: "ToDo App",
      bg: "#8e44ad",
      description: "ToDo App",
      image: todo,
      url: "https://yarazarin.github.io/to-do-list-app",
      description: [
        <>
          <h4>Introduction:</h4> This is a web application with a focus on task
          management.
        </>,
        <>
          <h4>Challenge:</h4> The goal was to create a platform where users can
          add, edit, delete, and mark tasks as done, filter tasks, and save
          tasks to local storage.
        </>,
        <>
          <h4>Approach:</h4> The application was built with a focus on
          user-friendly task management functionalities.
        </>,
        <>
          <h4>Results:</h4> Successfully created a task management platform with
          functionalities to add, edit, delete, mark tasks as done, filter
          tasks, and save tasks to local storage.
        </>,
      ],
    },
    {
      label: "R.Native Chat",
      bg: "#f39c12",
      description: "React native Chat App",
      image: chat,
      url: "https://github.com/yarazarin/CHAT",
      description: [
        <>
          <h4>Introduction:</h4> This is a messenger application.
        </>,
        <>
          <h4>Challenge:</h4> The goal was to create a platform where users can
          log in as a guest, send and receive messages and pictures, and use the
          camera on the Expo Go app.
        </>,
        <>
          <h4>Approach:</h4> The application was built with a focus on
          user-friendly communication functionalities.
        </>,
        <>
          <h4>Results:</h4> Successfully created a communication platform with
          functionalities to log in as a guest, send and receive messages and
          pictures, and use the camera on the Expo Go app.
        </>,
      ],
    },
    {
      label: "API Project",
      bg: "#2980b9",
      description: "API Pokemon Project",
      image: api,
      url: "https://yarazarin.github.io/simple-js-app",
      description: [
        <>
          <h4>Introduction:</h4> This is a web application with a focus on API
          data retrieval.
        </>,
        <>
          <h4>Challenge:</h4> The goal was to create a platform where users can
          search for any API and get the data in JSON format.
        </>,
        <>
          <h4>Approach:</h4> The application was built using Bootstrap for a
          user-friendly interface.
        </>,
        <>
          <h4>Results:</h4> Successfully created a platform that allows users to
          search for any API and get the data in JSON format.
        </>,
      ],
    },
  ];

  const styleLinks = (deg) => ({
    transform: `rotate(${deg}deg)`,
  });

  const linkOver = (e, radius, link) => {
    setHoveredLink(link);
    const thisLink = e.target;
    const thisHover = thisLink.nextSibling;

    if (thisHover) {
      document.body.style.backgroundColor = thisLink.dataset.color;
    }
  };

  const linkOut = (e, radius) => {
    const thisLink = e.target;
    const thisHover = thisLink.nextSibling;
    if (thisHover && !infoBoxHovered) {
      setHoveredLink(null);
      document.body.style.backgroundColor = "initial";
    }
  };

  const infoBoxHoverOver = () => {
    setInfoBoxHovered(true);
  };

  const infoBoxHoverOut = () => {
    setInfoBoxHovered(false);
  };

  return (
    <>
      <div className="TirdPage_container">
        <div className="circle_menue-container">
          <img className="line_circle moon" alt="moon" src={moon} />
          {links.map((link, index) => {
            const deg = startPoint + index * increment;
            return (
              <div key={index}>
                <button
                  className="rounded_link-Button"
                  style={{
                    ...styleLinks(deg, index),
                  }}
                  data-color={link.bg}
                  onMouseOver={(e) => linkOver(e, radius, link)}
                  onMouseOut={(e) => linkOut(e, radius)}
                >
                  <img
                    className="rounded_image"
                    src={link.image}
                    alt={link.label}
                  />
                </button>
              </div>
            );
          })}
          {hoveredLink && (
            <div
              className="infoBox"
              onMouseEnter={infoBoxHoverOver}
              onMouseLeave={infoBoxHoverOut}
            >
              <span className="info_title">{hoveredLink.label}</span>
              <h1>{hoveredLink.title}</h1>
              {hoveredLink.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <button onClick={() => window.open(hoveredLink.url, "_blank")}>
                Visit Website
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
