import { useEffect, useRef } from "react";
const ColorChanger = ({ hue }) => {
  const hueNum = useRef(-50);
  let shiftSpeed = 0.1;
  let animationFrame;

  //infinite loop
  useEffect(() => {
    const colorShift = () => {
      hueNum.current = (hueNum.current + shiftSpeed) % 360;
      hue.current = "hsla(" + hueNum.current + ", 100%, 70%, 1.00)";
      animationFrame = requestAnimationFrame(colorShift);
    };
    animationFrame = requestAnimationFrame(colorShift);
  }, []);
};

export default ColorChanger;
