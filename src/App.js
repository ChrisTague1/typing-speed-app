import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import Input from './components/Input/Input';
import TimeRemaining from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
import OverlayTimer from './components/OverlayTimer/OverlayTimer';
import constants from './constants';
import './App.css';

const preGame = ["Enter the words that come up in this box"];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameRunning: false,
      input: '',
      inputWordStyle: 'isBlack',
      time: constants.gameTime,
      testGoing: false,
      countdown: 3,
      overlayActive: false,
      correctKeystrokes: 0,
      inputDisabled: true,
      currentIndex: 1,
      allWords: preGame
    }
  }


  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  onInputChange = (event) => {
      this.setState({input: event.target.value});
      this.checkWordProgress(event.target.value);
  }

  checkWordProgress = (word) => {
    if (this.state.allWords[0].concat(" ").startsWith(word)) {
      this.setState({inputWordStyle: 'isGreen'});
      this.checkWordFinished(word);
    } else this.setState({inputWordStyle: 'isRed'})
  }

  checkWordFinished = (word) => {
    if (this.state.allWords[0].concat(" ") === word) {
      const tempArray = [...this.state.allWords];
      tempArray.splice(0, 1);
      this.setState((prevState, props) => {
        return {
          input: "",
          currentIndex: ++prevState.currentIndex,
          correctKeystrokes: prevState.correctKeystrokes + prevState.allWords[0].length - 1,
          inputWordStyle: 'isBlack',
          allWords: tempArray
        };
      });
    }
  }

  startTest = () => {
    if (!this.state.testGoing && this.state.time === constants.gameTime) {
      this.shuffleArray(constants.wordList);
      this.setState({
        allWords: this.shuffleArray(constants.wordList)
      });
      this.startTimer();
    }
  }

  resetTest = () => {
    this.setState({
      correctKeystrokes: 0,
      currentIndex: 1,
      input: "",
      time: constants.gameTime,
      allWords: preGame,
      inputWordStyle: 'isBlack',
    })
    this.stopTimer();
  }

  startTimer = () => {
    if (!this.state.testGoing && this.state.time === constants.gameTime) {
      this.setState({
        overlayActive: true
      });
      this.countdownTimer = setInterval(() => { // run the countdown timer first
        this.setState((prevState, props) => ({
          countdown: prevState.countdown - 0.1
        }));
        if (this.state.countdown <= 0) this.stopCountdown();
      }, 100);

      setTimeout(() => { // run the actual game timer after the countdown timer finishes
        this.setState({
          testGoing: true,
          inputDisabled: false
        });
        this.timer = setInterval(() => {
          this.setState((prevState, props) => ({
            time: prevState.time - 1
          }));
          if (this.state.time <= 0) this.stopTimer();
        }, 1000);
      }, 3000);

      setTimeout(() => {
        console.log("DONE WITH TEST");
      }, (constants.gameTime + 3) * 1000);
    }
  }

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      testGoing: false,
      inputDisabled: true,
      input: ""
    });
  }

  stopCountdown = () => {
    clearInterval(this.countdownTimer);
    this.setState({
      overlayActive: false,
      countdown: 3
    });
    setTimeout(() => document.getElementById("inputBox").focus(), 10);
  }

  render() {
    return (
       <div className='App'>
        <OverlayTimer time={this.state.countdown} active={this.state.overlayActive} />
        <Title startTest={this.startTest} resetTest={this.resetTest}/>
        <Words words={this.state.allWords} />
        <Input 
          onInputChange={this.onInputChange} 
          inputWordStyle={this.state.inputWordStyle} 
          text={this.state.input} 
          disabled={this.state.inputDisabled}
        />
        <TimeRemaining time={this.state.time}/>
        <LiveWPM time={this.state.time} correctKeystrokes={this.state.correctKeystrokes} />
      </div>
    );
  }
}

export default App;
