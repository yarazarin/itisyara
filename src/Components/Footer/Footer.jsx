import React, { useState, useEffect, useCallback } from "react";
import "./Footer.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = useCallback((time) => {
    const year = time.getFullYear();
    const month = MONTHS[time.getMonth()];
    const day = time.getDate().toString().padStart(2, "0");
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${year} ~ ${month} ${day}   ${hours}:${minutes}:${seconds}`;
  }, []);

  return (
    <div className="footer">
      <div className="ico">
        <a
          href="mailto:uraeel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Send an email to Uraeel"
        >
          <i className="fa-solid fa-square-envelope"></i>
        </a>
        <a
          href="https://github.com/yarazarin"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Yara's GitHub profile"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yarazarin"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Yara's LinkedIn profile"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="Rights">
        <pre>Yara Zarin {formatTime(time)}</pre>
      </div>
    </div>
  );
};

export default Footer;
