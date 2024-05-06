import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ThirdPage.css";
import api from "../../img/api.png";
import chat from "../../img/chat.png";
import meet from "../../img/meet.png";
import myFlix from "../../img/myFlix.png";
import myAng from "../../img/myAng.png";
import todo from "../../img/todo.png";
import Arrow from "../Arrow";

const ModalComponent = ({
  title,
  paragraphs = [],
  image,
  showModal,
  handleClose,
  url,
}) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal-size"
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="custom-modal-content">
            {paragraphs.map((paragraph, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </Modal.Body>
        <Button
          variant="primary"
          href={url}
          target="_blank"
          className="go_to-website"
        >
          See the project
        </Button>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const ThirdPage = () => {
  const [showModal, setShowModal] = useState(false);
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
  const [selectedProject, setSelectedProject] = useState({});

  const handleClose = () => setShowModal(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      <div className="container third-container">
        <h2 className="text-center mb-4">
          Some Of My Projects Are Here{" "}
          <i class="fa-solid fa-turn-down" style={{ color: "green" }}></i>
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="p-6">
              {projects.map((project, index) => (
                <Button
                  key={index}
                  variant="primary"
                  className="mb-2 custom-button"
                  onClick={() => handleShow(project)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      width="100"
                      height="100"
                    />
                    <span>{project.title}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <ModalComponent
          title={selectedProject.title}
          paragraphs={selectedProject.paragraphs}
          image={selectedProject.image}
          showModal={showModal}
          handleClose={handleClose}
          url={selectedProject.url}
        />
      </div>
      <div className="arrow3rd">
        <Arrow />
      </div>
    </>
  );
};

export default ThirdPage;