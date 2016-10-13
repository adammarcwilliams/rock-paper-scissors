import React from 'react'

const Result = ({result}) => (
  <div>
    <p id='result' className='App-result'>{result}</p>
  </div>
)

Result.propTypes = {
  result: React.PropTypes.string.isRequired
}

export default Result
