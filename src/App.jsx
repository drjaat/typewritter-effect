import React, { useEffect } from "react";
import Typewriter from "./utils/Typewriter";

export default function App() {
  const typewriter = new Typewriter(true);

  useEffect(() => {
    typewriter
    .typeString("Too many people spend money they earned..to buy things they don't want..to impress people that they don't like. --Will Rogers \n\n")
    .pauseFor(100)
    .typeString('A wise person should have money in their head, but not in their heart. --Jonathan Swift \n\n')
    .pauseFor(100)
    .typeString("It's how you deal with failure that determines how you achieve success. --David Feherty\n\n")
    .pauseFor(100)
    .typeString("Wealth consists not in having great possessions, but in having few wants. --Epictetus Money often costs too much. --Ralph Waldo Emerson\n\n")
    .deleteAll(10)
    .start('typed',true);

    return () => {
      typewriter.stop();
    }
  });

  return (
    <div className="App">
      <div className="custom-typewritter">
        <p className="custom-typewritter__header">Custom Typewriter Effect</p>
      </div>
      <div className="custom-typewritter__content">
        <p className="custom-typewritter__text" id="typed"></p>
      </div>
    </div>
  );
}
