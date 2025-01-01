import React from "react";
import "./Footer.css";

const Footer = () => {

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
                <pre>Yara Zarin | 2020 </pre>
            </div>
        </div>
    );
};

export default Footer;
