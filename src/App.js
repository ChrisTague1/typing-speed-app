import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import allWords from './components/Words/allWords';
import Input from './components/Input/Input';
import TimeRemaining from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
// import OverlayTimer from './components/OverlayTimer/OverlayTimer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    const index1 = Math.floor(Math.random() * allWords.length);
    const tmpWord = allWords[index1];
    allWords.splice(index1, 1);
    const index2 = Math.floor(Math.random() * allWords.length);


    this.state = {
      gameRunning: false,
      input: '',
      currentWord: tmpWord,
      nextWord: allWords[index2],
      totalWords: 0,
      timeLeft: 60,
      inputWordStyle: 'isRed',
    }
  }


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
      const index = Math.floor(Math.random() * allWords.length);
      this.setState((prevState, props) => {
        return {
        input: "",
        totalWords: ++prevState.totalWords,
        currentWord: prevState.nextWord,
        nextWord: allWords[index]
      }})
      allWords.splice(index, 1);
    }
  }

  render() {
    return (
       <div className='App'>
        {/* <OverlayTimer /> */}
        <Title />
        <Words currentWord={this.state.currentWord} nextWord={this.state.nextWord} />
        <Input 
          onInputChange={this.onInputChange} 
          inputWordStyle={this.state.inputWordStyle} 
          text={this.state.input} 
        />
        <TimeRemaining />
        <LiveWPM />
      </div>
    );
  }
}

export default App;
