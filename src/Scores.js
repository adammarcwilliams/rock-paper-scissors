import React from 'react'

const Scores = ({playerScore, botScore, handleReset}) => {
  return (
    <div id='scoreBox' className='App-scores-box'>
      <div className='App-scores-col--human'>
        <p className='App-scores--label'>HUMAN</p>
        <p className='App-scores--counter'>{playerScore}</p>
      </div>
      <div className='App-scores-col--reset'>
        <a href='#' className='App-scores-reset' onClick={handleReset}>RESET GAME</a>
      </div>
      <div className='App-scores-col--robot'>
        <p className='App-scores--label'>ROBOT</p>
        <p className='App-scores--counter'>{botScore}</p>
      </div>
    </div>
  )
}

Scores.propTypes = {
  handleReset: React.PropTypes.func.isRequired,
  playerScore: React.PropTypes.number.isRequired,
  botScore: React.PropTypes.number.isRequired
}

export default Scores
