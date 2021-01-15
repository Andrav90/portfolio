import React from "react";
import emailjs from "emailjs-com";
// import 'hover.css';
import emailSent from "../../assets/icons/lets-talk/mail-sent.svg";
import "./LetsTalk.css";

function LetsTalk() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "mail_service",
      "contact_form",
      e.target,
      "user_hjPQvThNWiLpxLwBavpB7"
    );

    let msgSentCont = document.getElementsByClassName("msg-sent-container")[0];
    msgSentCont.classList.add("visible");
    msgSentCont.addEventListener("click", () => {
      msgSentCont.classList.remove("visible");
    });
  }

  return (
    <div>
      <img
        className="lets-talk-figure"
        src="https://api-lunacy.icons8.com/api/assets/91b4843a-cc93-4808-9362-f81643218840/OrnamentDottedwhite.png"
        alt=""
      />
      <form className="contact-form" onSubmit={sendEmail}>
        <h5 className="form-title">Feel free to contact me and say hello!</h5>
        <input type="hidden" name="contact_number" />
        <input type="text" name="user_name" placeholder="Your name" required />
        <input
          type="email"
          name="user_email"
          placeholder="E-mail address"
          required
        />
        <textarea
          name="message"
          placeholder="Your message here..."
          required
        ></textarea>
        <button type="submit" className="submit-form-btn">
          Send message
        </button>

        <div className="msg-sent-container hidden hvr-ripple-out">
          <img src={emailSent} className="mail-icon" alt="mail" />
          <h5 className="msg-sent-text">Message successfully sent!</h5>
        </div>
      </form>
    </div>
  );
};

export default LetsTalk;