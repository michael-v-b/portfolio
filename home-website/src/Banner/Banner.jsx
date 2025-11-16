import "./Banner.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Banner = ({ hue }) => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const bannerHeight = "10vh";
  let animationFrame;
  //infinitely shift the color hue
  useEffect(() => {
    const bannerStyle = bannerRef.current.style;
    const textStyle = textRef.current.style;

    const changeColors = () => {
      bannerStyle.borderColor = hue.current;
      textStyle.color = hue.current;
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
      </motion.div>
    </>
  );
};

export default Banner;
