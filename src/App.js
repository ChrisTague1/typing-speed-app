
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
    timeLeft: 60
  }
    
  render() {
    return (
       <div className='App'>
        <Title />
        <Words />
        <Input />
        <TimeRemaining />
        <LiveWPM />
      </div>
    );
  }
}

export default App;
