import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { randomBytes } from "crypto";

export const CHOICES = {
  rock: {
    name: "rock",
    url: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  }
};

const defaultURL = "https://media.giphy.com/media/7MezEc0TOaMlW/giphy.gif";

const listOfChoices = Object.keys(CHOICES);

function App() {
  const [result,setResult] = useState("let's start the game");
  const [computer,setComputer] = useState(null);
  const [player,setPlayer] = useState(null);
  const [history,setHistory] = useState([]);

  const decideOutcome = (pChoice, cChoice) => {
    if (pChoice === cChoice) return 'TIE'
    else if (pChoice === 'rock') return cChoice === 'paper' ? 'LOSE' : 'WIN'
    else if (pChoice === 'paper') return cChoice === 'scissors' ? 'LOSE' : 'WIN'
    else if (pChoice === 'scissors') return cChoice === 'rock' ? 'LOSE' : 'WIN'
  }

  function randomChoice() {
    switch (Math.floor(Math.random(listOfChoices.length)*listOfChoices.length)) {
      case 0:
        console.log('cChoice : rock');
        return 'rock';
      case 1:
          console.log('cChoice : paper');
        return 'paper';
      case 2:
          console.log('cChoice : scissors');
        return 'scissors';
    }
  }
  
  const classColor = (target, res) => {
    if (res === 'TIE') return 'tie'
    else if (res === 'WIN') return target === 'player' ? 'winner' : 'loser'
    else if (res === 'LOSE') return target === 'player' ? 'loser' : 'winner'
    return "blah"
  }

  const renderHistory = (history) =>{
    if(history.length>0) {
      let winPercent = Math.round(history.filter((result) => result === "WIN").length/history.length*100) 
      let losePercent = Math.round(history.filter((result) => result === "LOSE").length/history.length*100)  
      let tiePercent = Math.round(history.filter((result) => result === "TIE").length/history.length*100)  
      return `You won ${winPercent}%, lost ${losePercent}% and tie ${tiePercent}% of the time`
    } else {return 'Goodluck!'}
  }

  function handlePlayerChoice(playerChoice) {
    console.log(playerChoice);
    const computerChoice = randomChoice();
    const result = decideOutcome(playerChoice,computerChoice);
    console.log('result', result);
    setResult(result)
    setPlayer(CHOICES[playerChoice])
    setComputer(CHOICES[computerChoice])
    setHistory([result,...history])
    console.log("classColor:", classColor)
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container cards">
        <ChoiceCard
          title="You"
          imgURL={computer ? computer.url : defaultURL}
          color={classColor('player', result)}
        />
      <div className="col-4 container align-self-center justify-content-around">
        <h1 className="display-4 text-bold text-dark">{result}</h1>
        <button className="mt-4 mr-4 btn-danger rounded shadow" onClick={()=>handlePlayerChoice('rock')} data-toggle="tooltip" data-placement="bottom" title="It's a rock, dude!"><i class="fas fa-hand-rock fa-2x text-light"></i></button>
        <button className="mr-4 btn-warning rounded  shadow" onClick={()=>handlePlayerChoice('paper')} data-toggle="tooltip" data-placement="bottom" title="it's paper"><i class="fas fa-hand-paper fa-2x text-light"></i></button>
        <button className="mb-5 btn-info rounded  shadow" onClick={()=>handlePlayerChoice('scissors')} data-toggle="tooltip" data-placement="bottom" title="These are scissors"><i class="fas fa-hand-scissors fa-2x text-light"></i></button>
        
        <p className="lead">{renderHistory(history)}</p>
      </div>
        <ChoiceCard
          title="Computer"
          imgURL={player ? player.url : defaultURL}
          color={classColor('computer', result)}
        />
      </div>
      <Footer />
    </div>
  );
}



// function selectingAnimation() {

// }

export default App;
