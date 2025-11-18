import Github from "../assets/contacts/github.svg?react";
import Linkedin from "../assets/contacts/linkedin.svg?react";
import Mail from "../assets/contacts/mail.svg?react";
import ContactCard from "./ContactCard.jsx";
import "./Contact.css";
import { useRef, useEffect } from "react";

const Contact = ({ ref, hue }) => {
  const contactRef = useRef(null);
  let animationFrame;

  useEffect(() => {
    const colorChange = () => {
      contactRef.current.style.color = hue.current;
      animationFrame = window.requestAnimationFrame(colorChange);
    };
    animationFrame = window.requestAnimationFrame(colorChange);
    return () => window.cancelAnimationFrame(colorChange);
  }, []);
  return (
    <>
      <div ref={ref} className="contacts-window">
        <div ref={contactRef} className="contact-title">
          Contacts
        </div>
        <div className="contact-text">
          Do you want to work together? Feel free to reach out!
        </div>
        <div className="contacts-container">
          <ContactCard
            image={<Mail className="contact-image " />}
            media="mail"
            name="Email"
            link="mailto:michael.v.burton@gmail.com"
          />
          <ContactCard
            image={<Linkedin className="contact-image" />}
            media="linkedin"
            name="LinkedIn"
            link="https://linkedin.com/in/michael-v-burton"
          />
          <ContactCard
            image={<Github className="contact-image" />}
            media="github"
            name="Github"
            link="https://github.com/michael-v-b"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
