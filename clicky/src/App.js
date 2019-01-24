import React, { Component } from 'react';
import './App.css';
import ppl from './ppl.json';
import Score from './component/Score';
import Ppl from './component/Ppl/index'

class App extends Component {
state = {
  result: "",
  score: 0,
  topScore: 0,
  ppl: ppl
}

componentDidMount(){
const newPpl = this.shuffleArray(ppl);
this.setState({ppl: newPpl})
}

shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  render() {
    return (
      <>
      <Score result={this.state.result} 
      score={this.state.score}
      topScore={this.state.topScore}/>
      <div className="container">
      <div className="row">
      {this.state.ppl.map(ppl => (
        <Ppl 
        key={ppl.id}
        id={ppl.id}
        image={ppl.image}
        clickHandle={this.clickHandle}
        />
      ))}
      </div>
      </div>
   
      </>
    );
  }
}

export default App;
