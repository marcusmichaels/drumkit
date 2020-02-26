import React from "react";
import ReactDom from "react-dom";
import "./index.scss";

import Display from "./Display";
import DrumPad from "./DrumPad";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drums: [
        {
          letter: "Q",
          keyCode: 81,
          id:"heater1",
          audio: "./assets/drums/Heater-1.mp3"
        },
        {
          letter: "W",
          keyCode: 87,
          id:"heater2",
          audio: "./assets/drums/Heater-2.mp3"
        },
        {
          letter: "E",
          keyCode: 69,
          id:"heater3",
          audio: "./assets/drums/Heater-3.mp3"
        },
        {
          letter: "A",
          keyCode: 65,
          id:"heater4",
          audio: "./assets/drums/Heater-4_1.mp3"
        },
        {
          letter: "S",
          keyCode: 83,
          id:"clap",
          audio: "./assets/drums/Heater-6.mp3"
        },
        {
          letter: "D",
          keyCode: 68,
          id:"open-high-hat",
          audio: "./assets/drums/Dsc_Oh.mp3"
        },
        {
          letter: "Z",
          keyCode: 90,
          id:"kick-hat",
          audio: "./assets/drums/Kick_n_Hat.mp3"
        },
        {
          letter: "X",
          keyCode: 88,
          id:"kick",
          audio: "./assets/drums/RP4_KICK_1.mp3"
        },
        {
          letter: "C",
          keyCode: 67,
          id:"closed-high-hat",
          audio: "./assets/drums/Cev_H2.mp3"
        },
      ],
      activeSound: ""
    }
  }

  displayUpdate = (d) => {

    this.setState({
      activeSound: d
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <Display active={this.state.activeSound} />
        {this.state.drums.map((item, index) => {
          return (
            <DrumPad
              key={index}
              id={item.id}
              drum={item.audio}
              letter={item.letter}
              keyCode={item.keyCode}
              updateDisplay={this.displayUpdate}/>
          )
        })}
      </div>
    );
  }
}

ReactDom.render(<DrumMachine />, document.getElementById('root'));


// User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

// User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

// User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

// User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

// User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

// User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).