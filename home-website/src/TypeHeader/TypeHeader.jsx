import { useEffect, useState, useRef } from "react";
import "./TypeHeader.css";

const Typer = () => {
  const hasTyped = useRef(false);
  const mainText = useRef("");
  const textContainer = useRef(null);
  const firstText = "I'm a ";
  const spellings = ["programmar", "programmmar", "programmmer"];
  const finalText = "I write code...";

  const wait = (seconds) => {
    return new Promise((resolve) => {
      let start;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        if (timestamp - start >= seconds * 1000) {
          resolve();
        } else {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  };

  const addWord = async (word) => {
    for (let i = 0; i < word.length; i++) {
      await wait(0.1);
      mainText.current = mainText.current + word.charAt(i);
      textContainer.current.textContent = mainText.current;
    }
  };

  const removeWord = async (word) => {
    for (let i = 0; i < word.length; i++) {
      await wait(0.05);
      const stringSub = mainText.current.slice(0, mainText.current.length - 1);
      textContainer.current.textContent = stringSub;
      mainText.current = stringSub;
    }
  };

  const typeWords = async () => {
    await addWord(firstText);
    await wait(0.01);
    for (let i = 0; i < spellings.length; i++) {
      await addWord(spellings[i]);
      await wait(0.5);
      await removeWord(spellings[i]);
      await wait(0.1);
    }
    await removeWord(firstText);
    await wait(0.1);
    await addWord(finalText);
  };

  useEffect(() => {
    if (!hasTyped.current) {
      typeWords();
      hasTyped.current = true;
    }
  }, []);

  return (
    <>
      <div className="type-container">
        <div>{">"}</div>
        <div ref={textContainer} className="type-header">
          {mainText.current}
        </div>
        <div className="cursor">_</div>
      </div>
    </>
  );
};

export default Typer;
