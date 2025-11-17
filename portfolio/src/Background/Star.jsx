import { forwardRef, useEffect, useRef } from "react";

const Star = forwardRef((props, ref) => {
  const initPos = useRef({ x: 0, y: 0 });
  const deltaPos = useRef({ x: 0, y: 0 });
  let direction;
  let velocity;
  let xSpeed = 0;
  let ySpeed = 0;

  let rect;
  let distance;
  const starRef = useRef(null);
  const center = [window.innerWidth / 2, window.innerHeight / 2];
  const MAX_SIZE = 5;

  //get the relative x and ys to ascertain speed
  const getDirection = () => {
    const direction = [0, 0];

    //set x and y relative to center
    const starX = initPos.current.x - center[0];
    const starY = initPos.current.y - center[1];
    //get distance from center
    const distance = Math.sqrt(starX * starX + starY * starY);
    //get relative directions
    direction[0] = starX / distance;
    direction[1] = starY / distance;

    return direction;
  };

  const initializeDirection = () => {
    direction = getDirection();
    velocity = Math.random() * 0.5;
    //randomizes the speed
    xSpeed = direction[0] * velocity;
    ySpeed = direction[1] * velocity;

    distance = velocity * MAX_SIZE;
  };

  const resetStar = (starStyle) => {
    const radius = 30;
    const ranges = [0, 0];
    for (let i = 0; i < ranges.length; i++) {
      ranges[i] = radius - Math.random() * radius * 2;
    }

    const final = [ranges[0] + center[0], ranges[1] + center[1]];
    starStyle.left = final[0] + "px";
    starStyle.top = final[1] + "px";
    starStyle.opacity = 1;
    deltaPos.current.x = 0;
    deltaPos.current.y = 0;
    initPos.current.x = final[0];
    initPos.current.y = final[1];
    initializeDirection();
  };

  //initialize the direction of each star
  useEffect(() => {
    const starStyle = starRef.current.style;
    rect = starRef.current.getBoundingClientRect();
    initPos.current.x = rect.x;
    initPos.current.y = rect.y;
    let growFrame;
    //ensures the star is always going away from the middle
    initializeDirection();
    starStyle.height = distance + "px";
    starStyle.width = distance + "px";

    const moveAnimation = () => {
      deltaPos.current.x += xSpeed;
      deltaPos.current.y += ySpeed;
      starStyle.transform =
        "translate(" + deltaPos.current.x + "px, " + deltaPos.current.y + "px)";

      const newX = initPos.current.x + deltaPos.current.x;
      const newY = initPos.current.y + deltaPos.current.y;
      if (
        newX <= window.innerWidth * 0.1 ||
        window.innerWidth * 0.9 <= newX ||
        newY <= window.innerHeight * 0.1 ||
        window.innerHeight * 0.9 <= newY
      ) {
        starStyle.opacity = 0;
      }
      if (
        newX <= 0 ||
        window.innerWidth <= newX ||
        newY <= 0 ||
        window.innerHeight <= newY
      ) {
        resetStar(starStyle);
      }
      growFrame = requestAnimationFrame(moveAnimation);
    };
    growFrame = requestAnimationFrame(moveAnimation);

    return () => cancelAnimationFrame(growFrame);
  }, []);

  return (
    <div
      ref={starRef}
      style={{
        position: "absolute",
        height: "10px",
        width: "10px",
        backgroundColor: "#FFFFFF",
        borderRadius: "100%",
        transition: "opacity 1s ease-in",
        ...props.style,
      }}
    ></div>
  );
});

export default Star;
