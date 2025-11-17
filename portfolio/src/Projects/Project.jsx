import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Project = ({ hue, picture, title, description, position }) => {
  const [projectPosition, setPosition] = useState("project-left");
  const durationMax = 7;
  const durationMin = 3;
  const durationTime =
    Math.random() * (durationMax - durationMin) + durationMin;

  const projectRef = useRef(null);
  let animationFrame;
  //set location of project in the website
  useEffect(() => {
    if (position == "right") {
      setPosition("project-right");
    } else {
      setPosition("project-left");
    }
  }, [position]);

  useEffect(() => {
    const projectStyle = projectRef.current.style;
    const changeBorder = () => {
      projectStyle.borderColor = hue.current;
      animationFrame = requestAnimationFrame(changeBorder);
    };
    animationFrame = requestAnimationFrame(changeBorder);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <div className={"project " + projectPosition}>
        <motion.div
          ref={projectRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: [-0.5, 0.5, -0.5], y: [0, 5, 5 - 5, -5, 0] }}
          transition={{
            scale: { transition: { duration: 0.25 } },
            duration: durationTime,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="project-container"
        >
          <img src={picture} className="project-image" />
          <div className="project-text">
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Project;
