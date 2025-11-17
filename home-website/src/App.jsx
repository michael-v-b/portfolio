import { useRef, useEffect } from "react";
import ColorChanger from "./ColorChanger";
import Banner from "./Banner/Banner";
import Background from "./Background/Background";
import DownArrow from "./assets/down-arrow.svg?react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import TypeHeader from "./TypeHeader/TypeHeader";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const hue = useRef(-50);
  const nameRef = useRef(null);
  const headerRef = useRef(null);
  let animationFrame;

  useEffect(() => {
    const changeColor = () => {
      headerRef.current.style.color = hue.current;
      animationFrame = window.requestAnimationFrame(changeColor);
    };
    animationFrame = window.requestAnimationFrame(changeColor);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

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
        <About />
        <Projects hue={hue} />

        <Experience />

        <div>Contact Info</div>

        <Banner hue={hue} />
      </div>
    </>
  );
}

export default App;
