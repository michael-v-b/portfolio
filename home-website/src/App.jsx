import { useRef } from "react";
import ColorChanger from "./ColorChanger.jsx";
import Banner from "./Banner/Banner";
import Background from "./Background/Background";
import DownArrow from "./assets/down-arrow.svg?react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const hue = useRef(-50);

  return (
    <>
      <ColorChanger hue={hue} />
      <Background />
      <div className="web-container">
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
