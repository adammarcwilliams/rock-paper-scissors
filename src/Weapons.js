import React from 'react'

const Weapons = (props) => {

  return (
    <div id="weaponBox" className="App-weapon-box">
      <div id="rockDiv" className="App-weapon">
        <a href="#"  onClick={props.handleSelect}>
          <i id="rock" className="icon-rock" />
        </a>
        <h1 id="robotEyeLeft" className="robotEyes robotEyeLeft">^</h1>
        <h1 id="robotEyeRight" className="robotEyes robotEyeRight">^</h1>
        <p className="App-weapon-label">ROCK</p>
      </div>
      <div id="paperDiv" className="App-weapon">
        <a href="#" onClick={props.handleSelect}>
          <i id="paper" className="icon-paper" />
        </a>
        <p className="App-weapon-label">PAPER</p>
      </div>
      <div id="scissorsDiv" className="App-weapon">
        <a href="#" onClick={props.handleSelect}>
          <i id="scissors" className="icon-scissors" />
        </a>
        <p className="App-weapon-label">SCISSORS</p>
      </div>
    </div>
  )
}

export default Weapons
