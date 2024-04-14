import React, { useState, useRef, useEffect } from "react";
import "./ThirdPage.css";
import api from "../../img/api.png";
import chat from "../../img/chat.png";
import meet from "../../img/meet.png";
import myFlix from "../../img/myFlix.png";
import myAng from "../../img/myAng.png";
import todo from "../../img/todo.png";
import HorizonalMenu from "../HorizontalMenu";
import Arrow from "../Arrow";

const projects = [
  {
    title: "myFlix React",
    description: "myFlix React",
    image: myFlix,
    url: "https://yaramyflix.netlify.app",
    paragraphs: [
      "<h4>Introduction:</h4> myFlix is a MERN stack application showcasing my full-stack JavaScript skills.",
      "<h4>Challenge:</h4> The goal was to build a robust, user-friendly web application.",
      "<h4>Approach:</h4> I constructed a RESTful API using Node.js, Express, and MongoDB. The client-side interface was built with React.",
      "<h4>Results:</h4> Overcame challenges in crafting clean code and ensuring robust security measures.",
    ],
  },
  {
    title: "myFlix Angular",
    description: "myFlix Angular",
    image: myAng,
    url: "https://yarazarin.github.io/myFlix-Angular-client/welcome",
    paragraphs: [
      "<h4>Introduction:</h4> myFlix Angular is a web application providing comprehensive movie information.",
      "<h4>Challenge:</h4> The goal was to create a platform where users can access information about different movies, directors, and genres.",
      "<h4>Approach:</h4> The application was built using Angular, allowing users to sign up, update their personal information, and create a list of their favorite movies.",
      "<h4>Results:</h4> Successfully created a user-friendly platform for movie enthusiasts.",
    ],
  },
  {
    title: "Meet App",
    description: "Meet App",
    image: meet,
    url: "https://yarazarin.github.io/meet",
    paragraphs: [
      "<h4>Introduction:</h4> This is a web application that utilizes Google Authentication.",
      "<h4>Challenge:</h4> The goal was to create a platform where users can log in, view a chart of meetings, and search and filter cities.",
      "<h4>Approach:</h4> The application was built using modern testing technologies to ensure reliability and performance.",
      "<h4>Results:</h4> Successfully created a user-friendly platform with Google Authentication, meeting charts, and city search and filter functionalities.",
    ],
  },
  {
    title: "ToDo App",
    description: "ToDo App",
    image: todo,
    url: "https://yarazarin.github.io/to-do-list-app",
    paragraphs: [
      "<h4>Introduction:</h4> This is a web application with a focus on task management.",
      "<h4>Challenge:</h4> The goal was to create a platform where users can add, edit, delete, and mark tasks as done, filter tasks, and save tasks to local storage.",
      "<h4>Approach:</h4> The application was built with a focus on user-friendly task management functionalities.",
      "<h4>Results:</h4> Successfully created a task management platform with functionalities to add, edit, delete, mark tasks as done, filter tasks, and save tasks to local storage.",
    ],
  },
  {
    title: "R.Native Chat",
    description: "React native Chat App",
    image: chat,
    url: "https://github.com/yarazarin/CHAT",
    paragraphs: [
      "<h4>Introduction:</h4> This is a messenger application.",
      "<h4>Challenge:</h4> The goal was to create a platform where users can log in as a guest, send and receive messages and pictures, and use the camera on the Expo Go app.",
      "<h4>Approach:</h4> The application was built with a focus on user-friendly communication functionalities.",
      "<h4>Results:</h4> Successfully created a communication platform with functionalities to log in as a guest, send and receive messages and pictures, and use the camera on the Expo Go app.",
    ],
  },
  {
    title: "API Project",
    description: "API Pokemon Project",
    image: api,
    url: "https://yarazarin.github.io/simple-js-app",
    paragraphs: [
      "<h4>Introduction:</h4> This is a web application with a focus on API data retrieval.",
      "<h4>Challenge:</h4> The goal was to create a platform where users can search for any API and get the data in JSON format.",
      "<h4>Approach:</h4> The application was built using Bootstrap for a user-friendly interface.",
      "<h4>Results:</h4> Successfully created a platform that allows users to search for any API and get the data in JSON format.",
    ],
  },
];

const ThirdPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalContentRef = useRef();

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1>
        Some Of My Projects Are Here <i class="fa-solid fa-turn-down"></i>
      </h1>
      <div className="new-third-page">
        <div className="project-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => handleClick(project)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal">
            <div className="modal-content" ref={modalContentRef}>
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <h2>{selectedProject.title}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="inner-modal-image"
              />
              {selectedProject.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
              <a
                className="visit-project"
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="third-page-arrow-container">
        <Arrow />
      </div>
      <HorizonalMenu />
    </>
  );
};

export default ThirdPage;
