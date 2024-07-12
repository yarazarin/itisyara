import "./ContactForm.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleReset = () => {
    setFirstName("");
    setEmail("");
    setMessage("");
    setEmailSent(false);
  };

  const handleResetContact = () => {
    setFirstName("");
    setEmail("");
    setMessage("");
    setEmailSent(false);
    setCaptchaValue(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sanitizedFirstName = firstName.replace(/<\/?[^>]+(>|$)/g, "");
    const sanitizedEmail = email.replace(/<\/?[^>]+(>|$)/g, "");
    const sanitizedMessage = message.replace(/<\/?[^>]+(>|$)/g, "");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(sanitizedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (captchaValue === null) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const templateParams = {
      firstName: sanitizedFirstName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      subject: "Porto website",
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully");
          setEmailSent(true);
        },
        () => {
          console.error("Failed to send email");
        }
      );
    handleReset();
    setCaptchaValue(null);
  };

  return (
    <div className="contact-container">
      {!emailSent && (
        <h2 className="hire-me">
          Would you be interested <br/> in my contributions to your team?
          <i class="fa-solid fa-arrow-turn-down"></i>
        </h2>
      )}
      {emailSent ? (
        <>
          <p>Email sent successfully!</p>
          <button
            type="reset"
            className="btn-back"
            onClick={handleResetContact}
          >
            &larr; Back
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
              Name | Org | Co | title... <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="Your Name or Title here..."
              onChange={handleFirstNameChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Your email address"
              onChange={handleEmailChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your Message <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              id="message"
              value={message}
              placeholder="Please enter your message here..."
              onChange={handleMessageChange}
              required
              className="form-control user-message"
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={setCaptchaValue}
            theme="dark"
          />
          <button type="submit" className="btn-submit">
            Submit<i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      )}

    </div>
  );
};

export default ContactForm;

// import React from "react";
// import "./ContactForm.css";

// const ContactForm = () => {
//   return (
//     <div className="container my-5">
//       <div className="card shadow">
//         <div className="card-body">
//           <h2 className="card-title text-center mb-4 Get-in_Touch">Get in Touch</h2>
//           <div className="d-flex justify-content-center mb-4">
// {/* <i className="fa-solid fa-arrow-turn-down fa-2x"></i> */}
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <a
//                 href="https://github.com/yarazarin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-decoration-none"
//               >
//                 <i className="fab fa-github fa-lg me-2"></i> GitHub
//               </a>
//             </li>
//             <li className="list-group-item">
//               <a
//                 href="https://www.linkedin.com/in/yarazarin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-decoration-none"
//               >
//                 <i className="fab fa-linkedin fa-lg me-2"></i> LinkedIn
//                 <span id="linkedin-link"></span>
//               </a>
//             </li>
//             <li className="list-group-item">
//               <a href="mailto:itisyara@gmail.com" className="text-decoration-none">
//                 <i className="fas fa-envelope fa-lg me-2"></i> Email
//               </a>
//             </li>
//             <li className="list-group-item">
//               <a href="mailto:itisyara@gmail.com" className="email_address">uraeel@gmail.com</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
