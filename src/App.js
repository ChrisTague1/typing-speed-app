
import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import Input from './components/Input/Input';
import TimeRemaining from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
import './App.css';

class App extends Component {
  state = {
    gameRunning: false,
    input: '',
    currentWord: '',
    nextWord: '',
    totalWords: 0,
    timeLeft: 60,
    wordColorGreen: true,

  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    checkWordProgress();
  }

  checkWordProgress = () => {
    if (this.state.currentWord.startsWith(this.state.input)) {
      this.setState({wordColorGreen: true});
      checkWordFinished();
    } else this.setState({wordColorGreen: false})
  }

  checkWordFinished = () => {
    if (this.state.currentWord === this.state.input) {
      this.state.totalWords++;
      
    }
  }

  render() {
    return (
       <div className='App'>
        <Title />
        <Words />
        <Input onInputChange={this.onInputChange} wordColorGreen={this.wordColorGreen}/>
        <TimeRemaining />
        <LiveWPM />
      </div>
    );
  }
}

export default App;
