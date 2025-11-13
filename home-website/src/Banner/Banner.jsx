import "./Banner.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Banner = () => {
  const bannerRef = useRef(null);
  let animationFrame;
  let shiftSpeed = 0.1;
  const bannerHeight = "15vh";
  //infinitely shift the color hue
  useEffect(() => {
    let hue = -50;
    const bannerStyle = bannerRef.current.style;
    const colorShift = () => {
      hue = (hue + shiftSpeed) % 360;
      console.log("hue" + hue);
      bannerStyle.backgroundColor = "hsla(" + hue + ", 100%, 70%, 1.00)";
      console.log(bannerStyle.backgroundColor);
      animationFrame = requestAnimationFrame(colorShift);
    };
    animationFrame = requestAnimationFrame(colorShift);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: bannerHeight }}
        layout={false}
        transition={{
          type: "spring",
          delay: 1,
          duration: 2,
          stiffness: 100,
          damping: 10,
        }}
        ref={bannerRef}
        style={{}}
        className="banner-container"
      >
        <div className="banner-text">Michael Burton</div>
      </motion.div>
    </>
  );
};

export default Banner;
