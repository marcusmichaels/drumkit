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
          audio: process.env.PUBLIC_URL + "/assets/drums/Heater-1.mp3"
        },
        {
          letter: "W",
          keyCode: 87,
          id:"heater2",
          audio: process.env.PUBLIC_URL + "/assets/drums/Heater-2.mp3"
        },
        {
          letter: "E",
          keyCode: 69,
          id:"heater3",
          audio: process.env.PUBLIC_URL + "/assets/drums/Heater-3.mp3"
        },
        {
          letter: "A",
          keyCode: 65,
          id:"heater4",
          audio: process.env.PUBLIC_URL + "/assets/drums/Heater-4_1.mp3"
        },
        {
          letter: "S",
          keyCode: 83,
          id:"clap",
          audio: process.env.PUBLIC_URL + "/assets/drums/Heater-6.mp3"
        },
        {
          letter: "D",
          keyCode: 68,
          id:"open-high-hat",
          audio: process.env.PUBLIC_URL + "/assets/drums/Dsc_Oh.mp3"
        },
        {
          letter: "Z",
          keyCode: 90,
          id:"kick-hat",
          audio: process.env.PUBLIC_URL + "/assets/drums/Kick_n_Hat.mp3"
        },
        {
          letter: "X",
          keyCode: 88,
          id:"kick",
          audio: process.env.PUBLIC_URL + "/assets/drums/RP4_KICK_1.mp3"
        },
        {
          letter: "C",
          keyCode: 67,
          id:"closed-high-hat",
          audio: process.env.PUBLIC_URL + "/assets/drums/Cev_H2.mp3"
        },
      ],
      activeSound: "Here we go!"
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