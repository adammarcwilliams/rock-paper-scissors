import React, { Component } from 'react'
import Weapons from './Weapons'
import Scores from './Scores'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerScore: 0,
      botScore: 0,
      playerWeaponSelected: ""
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect (e) {
    let weaponSelected = e.target.id
    this.setState({playerWeaponSelected : weaponSelected})

  }
  render() {
    return (
      <div className="App">
        <Weapons handleSelect={this.handleSelect}/>
        <Scores playerScore={this.state.playerScore} botScore={this.state.botScore}/>
      </div>
    )
  }
}

export default App
