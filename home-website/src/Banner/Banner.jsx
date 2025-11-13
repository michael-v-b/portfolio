import "./Banner.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  let animationFrame;
  let shiftSpeed = 0.1;
  const bannerHeight = "15vh";
  //infinitely shift the color hue
  useEffect(() => {
    let hue = -50;
    const bannerStyle = bannerRef.current.style;
    const textStyle = textRef.current.style;
    const colorShift = () => {
      hue = (hue + shiftSpeed) % 360;
      const color = "hsla(" + hue + ", 100%, 70%, 1.00)";
      bannerStyle.borderColor = color;
      textStyle.color = color;
      animationFrame = requestAnimationFrame(colorShift);
    };
    animationFrame = requestAnimationFrame(colorShift);

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
      </motion.div>
    </>
  );
};

export default Banner;
