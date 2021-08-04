import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐵": "Monkey",
  "🦏": "Rhinoceros",
  "🐪": "Camel",
  "🦙": "Llama",
  "🐘": "Elephant",
  "🐐": "Goat",
  "🐏": "Sheep",
  "🐮": "Cow",
  "🐂": "Ox",
  "🐖": "Pig",
  "🐹": "Hamster",
  "🐇": "Rabbit",
  "🦌": "Deer",
  "🐶": "Dog",
  "🐆": "Leopard",
  "🐅": "Tiger",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐩": "Poddle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🐈": "Cat",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🐿️": "Chipmunk",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐼": "Panda",
  "🐨": "Koala",
  "🦘": "Kangaroo",
  "🐧": "Penguin",
  "🐸": "Frog",
  "🦖": "T-rex",
  "🐬": "Dolphin",
  "🦈": "Shark",
  "🐙": "Octopus"
};

const expressionArray = [
  "Wow! Your spirit animal is ",
  "That's great - The ",
  "Amazing! The one and only - ",
  "Your spirit animal is - ",
  "The breathtaking - ",
  "The prodigious - ",
  "The animal within you - ",
  "Isn't your spirit animal the best - ",
  "I didn't knew your spirit animal is ",
  "Fabulous! Your spirit animal is "
];

export default function App() {
  const [emoji, setEmoji] = useState("'Name of your Spirit Animal'");
  var emojiArray = Object.keys(emojiDictionary);

  function randomExpression() {
    let randomIndex = Math.trunc(Math.random() * 10);
    return expressionArray[randomIndex];
  }

  function emojiHandler(e) {
    if (e.target.value === "") setEmoji("Try an animal emoji!");
    else if (emojiDictionary[e.target.value] === undefined)
      setEmoji("No animal found, try an emoji!");
    else {
      let expression = randomExpression();
      setEmoji(expression + emojiDictionary[e.target.value]);
    }
  }

  function emojiClickHandler(emoji) {
    let expression = randomExpression();
    setEmoji(expression + emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Animal Emoji Interpreter</h1>
      <p className="p-header">
        <span>
          We all have a spirit animal but do you know the names of all the
          animals?
          <br /> Search with the animal emoji or select one from below to know
          your spirit animal
        </span>
      </p>
      <input
        placeholder="Search Here!"
        onChange={emojiHandler}
        className="input-box"
      />
      <p className="p-emojiName">{emoji}</p>
      <div className="div-emoji-display">
        {emojiArray.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              style={{ cursor: "pointer", margin: ".5rem", fontSize: "3rem" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
