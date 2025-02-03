import React, { useState } from 'react'
import './App.css'

function App({minDamage = 0, maxDamage = 25}) {
  const INITIAL_HEALTH = 100;
  const INITIAL_STATUS = "playing";

  const [playerHP, setPlayerHP] = useState(INITIAL_HEALTH);
  const [enemyHP, setEnemyHP] = useState(INITIAL_HEALTH);

  const [gameStatus, setGameStatus] = useState(INITIAL_STATUS);

  function handleAttack() {
    const playerAtk = Math.floor(Math.random() * (maxDamage - minDamage) + 1) + minDamage;
    const enemyAtk = Math.floor(Math.random() * (maxDamage - minDamage) + 1) + minDamage;

    const newPlayerHP = Math.max(playerHP - enemyAtk, 0);
    const newEnemyHP = Math.max(enemyHP - playerAtk, 0);

    setPlayerHP(newPlayerHP);
    setEnemyHP(newEnemyHP);

    //when measuring playerHP/enemyHP, doesn't change status immdediately
    //if below conditions are met... WHY???
    if(newPlayerHP === 0 || newEnemyHP === 0) {
      if(newPlayerHP === 0 && newEnemyHP === 0)
        setGameStatus('draw');
      else if(newPlayerHP === 0)
        setGameStatus('lost');
      else
        setGameStatus('won');
    }
  }

  function handleRestart() {
    setPlayerHP(INITIAL_HEALTH);
    setEnemyHP(INITIAL_HEALTH);
    setGameStatus(INITIAL_STATUS);
  }

  function displayStatusMessage() {
    switch(gameStatus) {
      case 'won':
        return 'Victory! You have defeated the enemy!';
      case 'lost':
        return 'Defeat! The enemy has claimed victory over you.';
      case 'draw':
        return 'Stalemate.. neither you nor the enemy are victorious this day.';
      default:
        return 'A T T A C K !';
    }
  }


  return (
    <div className='game-container'>
      <div className='game-title'><h2>Space Battle Simulator</h2></div>
      <div className='game-board'>
        <div className='player-health'>
          <p>Player HP: <span>{playerHP}</span></p>
        </div>
        <div className='game-btn'>
          {gameStatus==='playing' &&
            <button className='play' onClick={handleAttack}>FIRE</button>
          }
          {gameStatus!=='playing' &&
            <button className='restart' onClick={handleRestart}>RESTART</button>
          }
        </div>
        <div className='enemy-health'>
          <p>Enemy HP: <span>{enemyHP}</span></p>
        </div>
      </div>
      <div className='game-message'>
        <p>{displayStatusMessage()}</p>
      </div>
    </div>
  )
}

export default App
