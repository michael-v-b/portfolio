import { useEffect, useState } from "react";
import Star from "./Star";
import "./Background.css";

const Background = () => {
  const STAR_NUM = 150;
  const [starPositions, setStarPositions] = useState([]);

  //set a direction upon spawning
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < STAR_NUM; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      temp.push([x, y]);
    }
    setStarPositions(temp);
  }, []);

  return (
    <>
      <div className="background-container">
        <div className="background-animation">
          {starPositions.map((value, key) => {
            console.log("value:");
            console.dir(value);
            return (
              <Star
                key={key}
                style={{ position: "absolute", top: value[1], left: value[0] }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Background;
