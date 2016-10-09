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
      result: "Select your weapon..."
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect (e) {
    let weaponSelected = e.target.id
    this.botSelect(weaponSelected)
  }
  botSelect (playerWeapon) {
    const WEAPONS = ['rock', 'paper', 'scissors']
    let randomNumber = () => Math.floor(Math.random() * 3)
    let botWeapon = WEAPONS[randomNumber()]
    this.calculateWinner(playerWeapon, botWeapon)
  }
  calculateWinner (playerWeapon, botWeapon) {
    if (playerWeapon === botWeapon) {
        this.setState({result: `Bot chose ${botWeapon}, It's a draw`})
    } else if (playerWeapon === 'rock' && botWeapon === 'paper') {
        this.setState({result: `Bot chose ${botWeapon}, You Loose`})
        this.setState({botScore: this.state.botScore + 1})
    } else if (playerWeapon === 'rock' && botWeapon === 'scissors') {
        this.setState({result: `Bot chose ${botWeapon}, You Win`})
        this.setState({playerScore: this.state.playerScore + 1})
    } else if (playerWeapon === 'paper' && botWeapon === 'rock') {
        this.setState({result: `Bot chose ${botWeapon}, You Win`})
        this.setState({playerScore: this.state.playerScore + 1})
    } else if (playerWeapon === 'paper' && botWeapon === 'scissors') {
        this.setState({result: `Bot chose ${botWeapon}, You Loose`})
        this.setState({botScore: this.state.botScore + 1})
    } else if (playerWeapon === 'scissors' && botWeapon === 'rock') {
        this.setState({result: `Bot chose ${botWeapon}, You Loose`})
        this.setState({botScore: this.state.botScore + 1})
    } else if (playerWeapon === 'scissors' && botWeapon === 'paper') {
        this.setState({result: `Bot chose ${botWeapon}, You Win`})
        this.setState({playerScore: this.state.playerScore + 1})
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Let's settle this like adults!</h1>
        <Weapons handleSelect={this.handleSelect}/>
        <Scores
          result={this.state.result}
          playerScore={this.state.playerScore}
          botScore={this.state.botScore}/>
      </div>
    )
  }
}

export default App
