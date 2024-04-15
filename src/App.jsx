import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [secretNumber, setSecretNumber] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [gameMessage, setGameMessage]= useState();
  const [success, setSuccess] = useState(false);
  const [bellow, setBellow] = useState(false);
  const [above, setAbove] = useState(false);
  const min = 0;
  const max = 9;

  const randomNumber = () => {
    return Math.floor(Math.random() * (max - min +1)) + min
  }

  const handleClick = (number) => {
    setSelectedNumber(number)
    console.log(number)
  }

  useEffect(() =>{
    setBellow(false); 
    setAbove(false);
    //comprobaciones del juego
    if (secretNumber){
      if(selectedNumber === secretNumber){
        setSuccess(true);
        setGameMessage("You guessed the number!");
      }
      else if(selectedNumber > secretNumber){
        setBellow(true);
        setGameMessage("Your number is bellow the hidden number");
      }
      else{
        setGameMessage("Your number is above the hidden number");
        setAbove(true);
      }
    }
  }, [selectedNumber])

  const startGame = () => {
    setGameMessage();
    setSuccess(false);
    const number = randomNumber();
    setSecretNumber(number);
    console.log(number);
  }
  return (
    <>
     <div className= 'container'>
      <div className= 'game-header'>
    <h1>GUESS THE NUMBER</h1>
    </div>
    <div className = 'secret-container'>
      <div className = 'secret-number'>
        <label>
          
      
        {success ? secretNumber : ""}
        {bellow ? "\u2193" : "" }
        {above ? "\u2191" : "" }
        {!bellow && !above && !success && secretNumber !== undefined ? "?" : ""}

        
        </label>
        </div>
    </div>
    <div className = 'numbers-container'>
    {
      numbers.map((number, index) => {
        return <div key ={index} onClick= {() => handleClick(number)} className = 'select-number'><label>{number}</label></div>

      })
    }
    </div>
    <div className = 'messages-container'>
      <p>{gameMessage}</p>
    </div>
    <div className = 'button-game'><button className = 'play-button' onClick={startGame}>PLAY GAME</button></div>
     </div>
    </>
  )
}

export default App
