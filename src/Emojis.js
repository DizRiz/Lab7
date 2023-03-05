import React, { useState } from "react";

const happy = "😄";
const sad = "😢";

// class Emoji extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { mood: happy }
//         this.toggleMood = this.toggleMood.bind(this);
//     }

//     toggleMood() {
//         const newMood = this.state.mood === happy ? sad : happy;
//         this.setState({ mood: newMood });
//     }

const Emoji = () => {
  const [mood, setMood] = useState(happy);

  const toggleMood = () => {
    const newMood = mood === happy ? sad : happy;
    setMood(newMood);
  };

  return (
    <>
          {/* <Emoji symbol={mood} label="mood" /> */}
          <h1>{mood}</h1>
      <button
        onClick={() => {
          toggleMood();
        }}
      >
        Change Mood
      </button>
    </>
  );
};

export default Emoji;
