import React from 'react'
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissors from './assets/scissors.svg'

const Weapons = (props) => {

  return (
    <div>
      <img id="rock" src={rock} className="App-weapon" alt="rock" onClick={props.handleSelect} />
      <img id="paper" src={paper} className="App-weapon" alt="paper" onClick={props.handleSelect} />
      <img id="scissors" src={scissors} className="App-weapon" alt="scissors" onClick={props.handleSelect} />
    </div>
  )
}

export default Weapons
