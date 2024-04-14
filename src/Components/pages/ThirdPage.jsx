import React, { useState, useRef, useEffect } from "react";
import "./ThirdPage.css";
import api from "../../img/api.png";
import chat from "../../img/chat.png";
import meet from "../../img/meet.png";
import myFlix from "../../img/myFlix.png";
import myAng from "../../img/myAng.png";
import todo from "../../img/todo.png";
import sticker from "../../img/sticker.png";

const projects = [
  {
    title: "myFlix React",
    description: "myFlix React",
    image: myFlix,
    url: "https://yaramyflix.netlify.app",
    paragraphs: [
      "myFlix is a web application developed with HTML, CSS, JavaScript, and React.js. It utilizes RESTful APIs for fetching and managing movie data, ensuring seamless browsing and interaction. Supported by Node.js, Express, and MongoDB, myFlix offers a secure and dynamic platform for users to explore their favorite films.",
    ],
  },
  {
    title: "myFlix Angular",
    description: "myFlix Angular",
    image: myAng,
    url: "https://yarazarin.github.io/myFlix-Angular-client/welcome",
    paragraphs: [
      "myFlix Angular is a web application that allows users to access information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.",
    ],
  },
  {
    title: "Meet App",
    description: "Meet App",
    image: meet,
    url: "https://yarazarin.github.io/meet",
    paragraphs: [
      "Log in with Google Authentication, show chart of meetings, search by city or country, filter the cities by name and number of cities.",
      "This application was built using modern testing technologies to ensure reliability and performance.",
    ],
  },
  {
    title: "ToDo App",
    description: "ToDo App",
    image: todo,
    url: "https://yarazarin.github.io/to-do-list-app",
    paragraphs: [
      "add, edit, delete, mark as done, filter by all, active, completed, clear completed, save to local storage.",
    ],
  },
  {
    title: "R.Native Chat",
    description: "React native Chat App",
    image: chat,
    url: "https://github.com/yarazarin/CHAT",
    paragraphs: [
      "log in as a guest, send and receive messages, pictures and using camera on expo go app.",
    ],
  },
  {
    title: "API Project",
    description: "API Pokemon Project",
    image: api,
    url: "https://yarazarin.github.io/simple-js-app",
    paragraphs: [
      "search for any API and get the data in JSON format, used bootstrap.",
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
              <p key={index}>{paragraph}</p>
            ))}
            <a
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
  );
};

export default ThirdPage;
