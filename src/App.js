import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import Input from './components/Input/Input';
import TimeRemaining from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
import OverlayTimer from './components/OverlayTimer/OverlayTimer';
import constants from './constants';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    // const index1 = getIndex();
    // const tmpWord = allWords[index1];
    // allWords.splice(index1, 1);
    // const index2 = getIndex();


    this.state = {
      gameRunning: false,
      input: '',
      currentWord: 'Current',
      nextWord: 'Next',
      totalWords: 0,
      inputWordStyle: 'isBlack',
      time: constants.gameTime,
      testGoing: false,
      countdown: 3,
      overlayActive: false,
      correctKeystrokes: 0,
      inputDisabled: true
    }
  }

  getIndex = () => Math.floor(Math.random() * constants.wordList.length);

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    this.checkWordProgress(event.target.value);
  }

  checkWordProgress = (word) => {
    if (this.state.currentWord.startsWith(word)) {
      this.setState({inputWordStyle: 'isGreen'});
      this.checkWordFinished(word);
    } else this.setState({inputWordStyle: 'isRed'})
  }

  checkWordFinished = (word) => {
    if (this.state.currentWord === word) {
      const index = this.getIndex();
      this.setState((prevState, props) => {
        return {
          input: "",
          totalWords: ++prevState.totalWords,
          correctKeystrokes: prevState.correctKeystrokes + prevState.currentWord.length,
          currentWord: prevState.nextWord,
          nextWord: constants.wordList[index],
          inputWordStyle: 'isBlack'
        };
      });
      constants.wordList.splice(index, 1);
    }
  }

  startTest = () => {
    if (!this.state.testGoing) {
      const index1 = this.getIndex();
      const tmp_word = constants.wordList[index1];
      constants.wordList.splice(index1, 1);
      const index2 = this.getIndex();
      this.setState({
        currentWord: tmp_word,
        nextWord: constants.wordList[index2]
      });
      constants.wordList.splice(index2, 1);
      this.startTimer();
    }
  }

  resetTest = () => {
    this.setState({
      currentWord: 'Current',
      nextWord: 'Next',
      correctKeystrokes: 0,
      totalWords: 0
    })
    if (this.state.gameRunning) this.stopTimer();
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
      }, constants.gameTime * 1000);
    }
  }

  stopTimer = () => {
    this.setState({
      testGoing: false,
      inputDisabled: true
    });
    clearInterval(this.timer);
  }

  stopCountdown = () => {
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
        <Words currentWord={this.state.currentWord} nextWord={this.state.nextWord} />
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
