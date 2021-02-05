import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [numPs, setNumPs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numPs) {
      const cParagraphs = [];
      let i;
      for (i = 0; i < numPs; i++) {
        cParagraphs.push({
          id: uuidv4(),
          p: loremIpsum({ units: "paragraphs" }),
        });
      }
      setParagraphs(cParagraphs);
    } else {
      console.log("no number enetered");
    }
  };
  return (
    <div className="app">
      <h1 className="title">Tired of boring lorem ipsum?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numPs">Paragraphs: </label>
        <input
          type="number"
          id="numPs"
          name="numPs"
          value={numPs}
          onChange={(e) => setNumPs(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      {paragraphs.map((paragraph) => {
        const { id, p } = paragraph;
        return <p key={id}>{p}</p>;
      })}
    </div>
  );
};

export default App;
