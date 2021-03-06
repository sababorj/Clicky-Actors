import React, { Component } from 'react';
import './App.css';
import ppl from './ppl.json';
import Score from './component/Score';
import Ppl from './component/Ppl/index'

class App extends Component {
state = {
  result: "Lets start",
  score: 0,
  topScore: 0,
  ppl: ppl,
  numberOfPpl: ppl.length,
  guessArray:[]
}


componentDidMount(){
const newPpl = this.shuffleArray(ppl);
this.setState({ppl: newPpl})
console.log(this.state)
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

clickHandle = id => {
  // is this picture is clicked before
  const guessedBefore = this.state.guessArray.includes(id);
  if(guessedBefore){
    // check if user hit new top score
    if(this.state.score > this.state.topScore){
      this.setState({
        topScore: this.state.score,
        score : 0,
        result : "You have already clicked this one!!",
        guessArray: [],
      })
      this.shuffleArray(this.state.ppl)
    } else {
      this.setState({
        score : 0,
        result : "You have already clicked this one!!",
        guessArray: [],
      })
      this.shuffleArray(this.state.ppl)
    }
   } // continue 
  else {
    if(this.state.score === (this.state.numberOfPpl-1)){
      this.setState({
        score: 0,
        topScore: 0,
        guessArray: [],
        result: "Wellcome back"
      })
      alert("you hit the topest score! well done. to play over close this window")
    }
    this.setState({
      score: this.state.score+1,
      guessArray: [...this.state.guessArray, id],
      result: "you guessed correctly, keep going!"
    })
    this.shuffleArray(this.state.ppl)
  } 
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
