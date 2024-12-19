import React, { useRef, useEffect } from "react";
import "./SecondPage.css";
import HorizontalMenue from "../HorizontalMenu";

const SecondPage = () => {
  const partOneRef = useRef(null);
  const partTwoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation when element becomes visible
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observerPartOne = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const observerPartTwo = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (partOneRef.current) {
      observerPartOne.observe(partOneRef.current);
    }
    if (partTwoRef.current) {
      observerPartTwo.observe(partTwoRef.current);
    }

    return () => {
      observerPartOne.disconnect();
      observerPartTwo.disconnect();
    };
  }, []);

  return (
    <>
    <div className="second_page">
      <div className="second_container">
        <div ref={partOneRef} className="part">
          <titr>Welcome</titr>
          <p>
            I'm a proactive Full-Stack Web Developer specializing in the M.E.R.N
            stack with extensive experience in AWS deployment. With a background
            in diverse roles ranging from social media communications to
            warehouse management, I bring a unique blend of problem-solving
            skills and creativity to my work. Currently seeking opportunities
            full-stack development where I can leverage my expertise to create
            innovative web solutions and drive positive change.
          </p>
        </div>
        <div ref={partTwoRef} className="part">
          <titr>My Expertise:</titr>
          <ul>
            <li>
              <strong>AWS:</strong> Hosting S3, EC2, VPC Hosting, MongoDB, React
              Client, AWS SDK for JavaScript, AWS Lambda Functions, Scalability
              and Security, Custom VPCs, Application Load Balancers, Identity
              and Access Management
            </li>
            <li>
              <strong>Frontend :</strong> Bootstrap, React, Angular, React
              Native, jQuery, HTML, CSS
            </li>
            <li>
              <strong>Backend :</strong> JavaScript, Node.js, Express,
              Serverless, Firebase
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, Google Firestore
            </li>
            <li>
              <strong>Tools :</strong> Git, GitHub, Testing, Adobe Photoshop,
              Adobe Indesign, Trello, Slack, Microsoft Office, Google work
              spaces, Canva
            </li>
            <li>
              <strong>Other :</strong> Project Management
            </li>
          </ul>
        </div>
      </div>
      <HorizontalMenue />
    </div>
    </>
  );
};

export default SecondPage;
