import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import fullWordList from './components/Words/allWords';
import Input from './components/Input/Input';
import TimeRemaining from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
// import OverlayTimer from './components/OverlayTimer/OverlayTimer';
import './App.css';

let allWords = [];

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
      currentWord: 'Current word',
      nextWord: 'Next word',
      totalWords: 0,
      timeLeft: 60,
      inputWordStyle: 'isBlack',
    }
  }

  getIndex = () => Math.floor(Math.random() * allWords.length);

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
        currentWord: prevState.nextWord,
        nextWord: allWords[index],
        inputWordStyle: 'isBlack'
      }})
      allWords.splice(index, 1);
    }
  }

  startTest = () => {
    allWords = fullWordList
    const index1 = this.getIndex();
    const tmp_word = allWords[index1];
    allWords.splice(index1, 1);
    const index2 = this.getIndex();
    this.setState({
      currentWord: tmp_word,
      nextWord: allWords[index2]
    });
    allWords.splice(index2, 1);
  }

  resetTest = () => {
    this.setState({
      currentWord: 'Current word',
      nextWord: 'Next word'
    })
  }

  render() {
    return (
       <div className='App'>
        {/* <OverlayTimer /> */}
        <Title startTest={this.startTest} resetTest={this.resetTest}/>
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
