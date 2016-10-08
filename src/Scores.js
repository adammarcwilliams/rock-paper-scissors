import React from 'react'

const Scores = (props) => {

  return (
    <div>
      <p>Player Score: {props.playerScore}</p>
      <p>Bot Score: {props.botScore}</p>
    </div>
  )
}

export default Scores
