import { useRef, useEffect, useState } from "react";
import ColorChanger from "./ColorChanger";
import Banner from "./Banner/Banner";
import Background from "./Background/Background";
import DownArrow from "./assets/down-arrow.svg?react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import TypeHeader from "./TypeHeader/TypeHeader";
import Contact from "./Contact/Contact";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const hue = useRef(-50);
  const nameRef = useRef(null);
  const headerRef = useRef(null);
  const arrowRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [arrowIsColorful, setArrowIsColorful] = useState(false);
  let animationFrame;
  let arrowFrame = useRef(null);

  useEffect(() => {
    const changeColor = () => {
      headerRef.current.style.color = hue.current;
      animationFrame = window.requestAnimationFrame(changeColor);
    };
    animationFrame = window.requestAnimationFrame(changeColor);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const arrowStyle = arrowRef.current.style;
    const changeColor = () => {
      arrowStyle.color = hue.current;
      arrowFrame.current = window.requestAnimationFrame(changeColor);
    };
    if (arrowIsColorful) {
      arrowFrame.current = window.requestAnimationFrame(changeColor);
    } else {
      window.cancelAnimationFrame(arrowFrame.current);
      arrowStyle.color = "#FFF";
    }
    return () => window.cancelAnimationFrame(arrowFrame.current);
  }, [arrowIsColorful]);

  return (
    <>
      <ColorChanger hue={hue} />
      <Background />
      <div className="web-container">
        <motion.div
          ref={headerRef}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="intro-header"
        >
          Hello! My name is...
        </motion.div>
        <motion.div
          ref={nameRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.75,
          }}
          className="name-header"
        >
          Michael Burton
        </motion.div>
        <TypeHeader />
        <motion.div
          ref={arrowRef}
          className="arrow-container"
          onMouseEnter={() => {
            setArrowIsColorful(true);
          }}
          onMouseLeave={() => {
            setArrowIsColorful(false);
          }}
          onClick={() => {
            window.scrollTo({ top: 650, behavior: "smooth" });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 3 },
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        >
          <DownArrow className="down-arrow" />
        </motion.div>
        <About ref={aboutRef} />
        <Projects ref={projectsRef} hue={hue} />

        <Experience ref={experienceRef} />

        <Contact ref={contactRef} hue={hue} />

        <Banner
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
          hue={hue}
        />
      </div>
    </>
  );
}

export default App;
