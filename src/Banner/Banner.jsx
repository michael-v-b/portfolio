import "./Banner.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Banner = ({ hue, aboutRef, projectsRef, experienceRef, contactRef }) => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const aboutTextRef = useRef(null);
  const projectsTextRef = useRef(null);
  const experienceTextRef = useRef(null);
  const contactsTextRef = useRef(null);

  const textRefList = [
    textRef,
    aboutTextRef,
    projectsTextRef,
    experienceTextRef,
    contactsTextRef,
  ];

  const bannerHeight = "10vh";
  let animationFrame;
  //infinitely shift the color hue
  useEffect(() => {
    const bannerStyle = bannerRef.current.style;

    const changeColors = () => {
      bannerStyle.borderColor = hue.current;
      for (let i = 0; i < textRefList.length; i++) {
        const textStyle = textRefList[i].current.style;
        textStyle.color = hue.current;
      }
      animationFrame = window.requestAnimationFrame(changeColors);
    };

    animationFrame = window.requestAnimationFrame(changeColors);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <motion.div
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: bannerHeight, opacity: 1 }}
        layout={false}
        transition={{
          type: "spring",
          delay: 1.5,
          duration: 2,
          stiffness: 100,
          damping: 10,
        }}
        ref={bannerRef}
        className="banner-container"
      >
        <div ref={textRef} className="banner-text">
          Michael Burton
        </div>
        <div className="banner-links-container">
          <motion.div
            ref={aboutTextRef}
            className="banner-link"
            whileHover={{ scale: 1.1, textDecoration: "underline" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </motion.div>
          <motion.div
            ref={projectsTextRef}
            className="banner-link"
            whileHover={{ scale: 1.1, textDecoration: "underline" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              projectsRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </motion.div>
          <motion.div
            ref={experienceTextRef}
            className="banner-link"
            whileHover={{ scale: 1.1, textDecoration: "underline" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              experienceRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </motion.div>
          <motion.div
            ref={contactsTextRef}
            className="banner-link"
            whileHover={{ scale: 1.1, textDecoration: "underline" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              contactRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contacts
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
