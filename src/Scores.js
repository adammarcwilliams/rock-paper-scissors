import React from 'react'

const Scores = (props) => {

  return (
    <div id="scoreBox" className="App-scores-box">
      <div className="App-scores-col">
        <p className="App-scores--label">HUMAN</p>
        <p className="App-scores--counter">{props.playerScore}</p>
      </div>
      <div className="App-scores-col">
        <p className="App-scores--label">ROBOT</p>
        <p className="App-scores--counter">{props.botScore}</p>
      </div>
    </div>
  )
}

export default Scores
