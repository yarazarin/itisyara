import React, { useState } from "react";
import api from "../../img/api.png";
import chat from "../../img/chat.png";
import meet from "../../img/meet.png";
import myFlix from "../../img/myFlix.png";
import myAng from "../../img/myAng.png";
import todo from "../../img/todo.png";
import sticker from "../../img/sticker.png";

import "./ThirdPage.css";

const linksData = [
  {
    title: "myFlix React",
    description: "myFlix React",
    image: myFlix,
    paragraphs: [
      "myFlix is a web application that allows users to access information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.",
    ],
    customDiv: <div></div>,
  },
  {
    title: "myFlix Angular",
    description: "myFlix Angular",
    image: myAng,
    paragraphs: [
      "myFlix Angular is a web application that allows users to access information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.",
    ],
    customDiv: <div></div>,
  },
  {
    title: "Meet App",
    description: "Meet App",
    image: meet,
    paragraphs: [
      "log in with google Authentication, show chart of meetings, search by city or country, filter the cities by name and number of cities.",
    ],
    customDiv: <div></div>,
  },
  {
    title: "ToDo App",
    description: "ToDo App",
    image: todo,
    paragraphs: [
      "add, edit, delete, mark as done, filter by all, active, completed, clear completed, save to local storage.",
    ],
    customDiv: <div></div>,
  },
  {
    title: "R.Native Chat",
    description: "React native Chat Application",
    image: chat,
    paragraphs: [
      "log in as a guest, send and receive messages, pictures and using camera on expo go app.",
    ],
    customDiv: <div></div>,
  },
  {
    title: "API Project",
    description: "API Pokemon Project",
    image: api,
    paragraphs: [
      "search for any API and get the data in JSON format, used bootstrap.",
    ],
    customDiv: <div></div>,
  },
];

const ThirdPage = () => {
  const [currentLink, setCurrentLink] = useState(null);

  const handleLinkClick = (index) => {
    if (currentLink === index) {
      setCurrentLink(null); // Close the details if the same link is clicked again
    } else {
      setCurrentLink(index); // Open the details of the clicked link
    }
  };

  return (
    <>
      <img className="sticker" src={sticker} alt="sticker" />
      <div className="sticker-text">Some of my projects</div>
      <div className="projects-container">
        <div className="links-projects-container">
          {linksData.map((link, index) => (
            <button
              key={index}
              className="projects-link"
              onClick={() => handleLinkClick(index)}
            >
              {link.title}
            </button>
          ))}
        </div>
        <div
          className={`details-projects-container${
            currentLink !== null ? " active" : ""
          }`}
        >
          {currentLink !== null && (
            <>
              <div className="image-projects-container">
                <img
                  src={linksData[currentLink].image}
                  alt={linksData[currentLink].description}
                />
              </div>
              <div className="paragraphs-projects-container">
                <h3>{linksData[currentLink].description}</h3>
                {linksData[currentLink].paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {linksData[currentLink].customDiv}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
