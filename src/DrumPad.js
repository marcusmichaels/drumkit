import React from "react";

class DrumPad extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
  
  handleKeydown = (e) => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  
  playSound() {
    let drum = document.getElementById(this.props.letter);
    
    drum.currentTime = 0;
    drum.play();
    
    this.props.updateDisplay(this.props.id);
    
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playSound.bind(this)}>
        <audio src={this.props.drum} className="clip" id={this.props.letter}></audio>
        {this.props.letter}
      </div>
    );
  }
}

export default DrumPad;