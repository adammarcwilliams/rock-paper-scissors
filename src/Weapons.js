import React from 'react'

const Weapons = (props) => {

  return (
    <div className="App-weapon-box">
      <div className="App-weapon">
        <a href="#"  onClick={props.handleSelect}>
          <i id="rock" className="icon-rock" />
        </a>
        <p className="App-weapon-label">ROCK</p>
      </div>
      <div className="App-weapon">
        <a href="#" onClick={props.handleSelect}>
          <i id="paper" className="icon-paper" />
        </a>
        <p className="App-weapon-label">PAPER</p>
      </div>
      <div className="App-weapon">
        <a href="#" onClick={props.handleSelect}>
          <i id="scissors" className="icon-scissors" />
        </a>
        <p className="App-weapon-label">SCISSORS</p>
      </div>
    </div>
  )
}

export default Weapons
