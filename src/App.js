
import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import Input from './components/Input/Input';
import TimeLeft from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
import './App.css';

class App extends Component {
  state = {

  }
    
  render() {
    return (
      <div>
        <Title />
        <Words />
        <Input />
        <TimeLeft />
        <LiveWPM />
      </div>
    );
  }
}

export default App;
