import React from 'react'
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissors from './assets/scissors.svg'

const Weapons = (props) => {

  return (
    <div>
      <div className="App-rock">
        <img id="rock" src={rock} className="App-weapon" alt="rock" onClick={props.handleSelect} />
      </div>
      <div className="App-paper">
        <img id="paper" src={paper} className="App-weapon" alt="paper" onClick={props.handleSelect} />
      </div>
      <div className="App-scissors">
        <img id="scissors" src={scissors} className="App-weapon" alt="scissors" onClick={props.handleSelect} />
      </div>
    </div>
  )
}

export default Weapons
