import React from 'react'
import scissors from './assets/icon-scissors.svg';
import rock from './assets/icon-rock.svg';
import paper from './assets/icon-paper.svg';
import lizard from './assets/icon-lizard.svg';
import spock from './assets/icon-spock.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/modal';
import Results from './components/Results';


function App() {
  const [modal, setModal] = useState(false);
  const [userOption, setUserOption] = useState(null);
  const [houseOption, setHouseOption] = useState("");
  const [isUserChoice, setIsUserChoice] = useState(false);
  const [score, setScore] = useState(0);


  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const selectionUserOption = (option) => {
    setUserOption(option);
    setIsUserChoice(true);
    const options = ["scissors", "spock", "paper", "lizard", "rock"];
    const randomOption = options[Math.floor(Math.random() * 5)];
    setTimeout(() => {
      setHouseOption(randomOption);
    }, 3000);
  };

  return (

    <div className='app'>
      {modal && <Modal closeModal={() => setModal(false)} />}
      <header>
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
          <p>LIZARD</p>
          <p>SPOCK</p>
        </div>
        <div className='scoreContainer'>
          <p className='score'>SCORE</p>
          <p className='number'>{score}</p>
        </div>
      </header>
      <main>
        <div className={isUserChoice ? "Results" : "ResultsNone"}>
          <Results
            userOption={userOption}
            setUserOption={setUserOption}
            houseOption={houseOption}
            setHouseOption={setHouseOption}
            setScore={setScore}
            setIsUserChoice={setIsUserChoice}
          />
        </div>
        <div className={isUserChoice ? "containerNone" : "container"}>
          <div className='top'>
            <div className='circle scissors' onClick={() => selectionUserOption("scissors")}
            >
              <img src={scissors} alt="" />
            </div>
          </div>

          <div className='middle'>
            <div className='circle spock' onClick={() => selectionUserOption("spock")}>
              <img src={spock} alt="" />
            </div>
            <div className='circle paper' onClick={() => selectionUserOption("paper")}>
              <img src={paper} alt="" />
            </div>
          </div>
          <div className='bottom'>
            <div className='circle lizard' onClick={() => selectionUserOption("lizard")}>
              <img src={lizard} alt="" />
            </div>
            <div className='circle rock' onClick={() => selectionUserOption("rock")}>
              <img src={rock} alt="" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button className='button' onClick={openModal}>RULES</button>
      </footer>
    </div>
  )
}

export default App