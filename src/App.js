import React, { Component } from 'react'
import { TweenMax, TimelineMax, Elastic, Linear } from 'gsap'
import { Howl } from 'howler'
import * as _ from 'underscore'
import Weapons from './Weapons'
import Scores from './Scores'
import tauntMP3 from './assets/taunt.mp3'
import './App.css'
import './fonts.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerScore: 0,
      botScore: 0,
      result: "Select your weapon..."
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.calculateWinner = _.debounce(this.calculateWinner, 1000)
  }
  componentDidMount () {
    const TAGLINE = document.getElementById('tagline')
    const ROCK = document.getElementById('rockDiv')
    const PAPER = document.getElementById('paperDiv')
    const SCISSORS = document.getElementById('scissorsDiv')
    const ROBOT_EYES = document.getElementsByClassName('robotEyes')
    const ROBOT_EYE_LEFT = document.getElementById('robotEyeLeft')
    const ROBOT_EYE_RIGHT = document.getElementById('robotEyeRight')
    const BACKGROUND = document.getElementById('background')
    const RESULT = document.getElementById('result')
    const SCOREBOX = document.getElementById('scoreBox')

    if (window.innerWidth > 700) {

      function animateIn() {
        const INTRO_TL = new TimelineMax()
        INTRO_TL.fromTo(ROCK, 1, {x: -1500, y: -200}, {x: 200, y:-200, ease:Elastic.easeInOut})
                .from(PAPER, 1, {x: -1500, ease:Elastic.easeInOut}, .1)
                .fromTo(SCISSORS, 1, {x: -1500, y: 200}, {x: -200, y: 200, ease:Elastic.easeInOut}, .2)
                .to(ROBOT_EYES, .5, {autoAlpha: 1, onComplete: eyesAnimation}, 1)
      }
      function eyesAnimation() {
        const TAUNT = new Howl({
          src: [tauntMP3]
        })
        const EYES_TL = new TimelineMax({repeat: 1, yoyo:true})
        TAUNT.play()
        EYES_TL.to(ROBOT_EYE_LEFT, .1, {css: {transform: 'rotate(110deg)'}})
                .to(ROBOT_EYE_RIGHT, .1, {css: {transform: 'rotate(-110deg)'}}, 0)
                .to(BACKGROUND, .1, {css: {background: 'linear-gradient(45deg, #7000B2 0%,#E8600C 100%)'}, onComplete: animateOut}, .1)
      }
      function animateOut() {
        const ANIMATE_OUT = new TimelineMax()
        ANIMATE_OUT.to(ROBOT_EYES, 0.5, {autoAlpha: 0})
                    .to(ROCK, 0.5, {x: 0, y:0, ease:Elastic.easeInOut})
                    .to(SCISSORS, 0.5, {x: 0, y:0, ease:Elastic.easeInOut})
                    .to(TAGLINE, 0.5, {autoAlpha: 1, ease:Linear.easeIn})
                    .to([RESULT, SCOREBOX], 1, {autoAlpha: 1, ease:Linear.easeIn})
      }
      animateIn()
    }
  }
  handleSelect (e) {
    let weaponSelected = e.target.id
    this.botSelect(weaponSelected)
  }
  handleReset () {
    this.setState({
      playerScore: 0,
      botScore: 0,
      result: "Select your weapon..."
    })
  }

  botSelect (playerWeapon) {
    const WEAPONS = ['rock', 'paper', 'scissors']
    let randomNumber = () => Math.floor(Math.random() * 3)
    let botWeapon = WEAPONS[randomNumber()]
    this.calculateWinner(playerWeapon, botWeapon)

    function botSelectElement(botWeapon) {
      const ROCK = document.getElementById('rockDiv')
      const PAPER = document.getElementById('paperDiv')
      const SCISSORS = document.getElementById('scissorsDiv')
      const WEAPON_BOX = document.getElementById('weaponBox')

      if (botWeapon === 'rock') {
        botSelectAnimate(ROCK)
      }
      if (botWeapon === 'paper') {
        botSelectAnimate(PAPER)
      }
      if (botWeapon === 'scissors') {
        botSelectAnimate(SCISSORS)
      }
      function botSelectAnimate(weapon) {
        const BOT_SELECT_TL = new TimelineMax()
        BOT_SELECT_TL.to(WEAPON_BOX, .1, {repeat: 5, yoyo: true, y: 5, ease:Linear.easeInOut})
                      .to(weapon, .2, {repeat: 1, yoyo: true, scale: 2, ease:Elastic.easeInOut})
      }
    }
    botSelectElement(botWeapon)
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
      <div id="background" className="App-box">
        <div className="App">
          <h1 id="tagline" className="App-tagline">Let's settle this like adults!</h1>
          <Weapons handleSelect={this.handleSelect}/>
          <p id="result" className="App-result">{this.state.result}</p>
          <Scores
            handleReset={this.handleReset}
            playerScore={this.state.playerScore}
            botScore={this.state.botScore}/>
        </div>
      </div>
    )
  }
}

export default App
