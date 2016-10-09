import React from 'react'

const Scores = (props) => {

  return (
    <div className="App-scores-box">
      <div className="App-scores-col">
        <p className="App-scores--label">Player Score</p>
        <p className="App-scores--counter">{props.playerScore}</p>
      </div>
      <div className="App-scores-col">
        <p className="App-scores--label">Robot Score</p>
        <p className="App-scores--counter">{props.botScore}</p>
      </div>
    </div>
  )
}

export default Scores
