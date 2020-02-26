import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.isPlaying = false;
    this.audioElement = "";
  }

  componentDidMount() {
    this.audioElement = document.getElementById(this.props.letter);
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('transitionend', this.removeClass);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('transitionend', this.removeClass);
  }
  
  removeClass = (e) => {
    e.target.classList.remove("active");
  }

  handleKeydown = (e) => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  
  

  playSound() {
    this.audioElement.onplaying = () => {
      this.isPlaying = true;
    }
    
    this.audioElement.onpause = () => {
      this.isPlaying = false;
    }
    
    if (this.isPlaying) {
      this.audioElement.parentNode.classList.remove("active");
      this.audioElement.parentNode.classList.add("active");
      this.audioElement.currentTime = 0;
      this.audioElement.play();
    } else {
      this.audioElement.play();
      this.audioElement.parentNode.classList.add("active");
    }
    
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