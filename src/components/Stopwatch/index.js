import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 0, seconds: 0}
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({seconds: 0, minutes: prevState.minutes + 1}))
    }
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({minutes: 0, seconds: 0})
  }

  stringifiedTime = () => {
    const {seconds, minutes} = this.state
    const stringifiedMinute =
      minutes.toString().length === 1 ? `0${minutes}` : minutes
    const stringifiedSecond =
      seconds.toString().length === 1 ? `0${seconds}` : seconds
    console.log(stringifiedMinute)
  }

  render() {
    const {minutes, seconds} = this.state
    this.stringifiedTime()
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="container">
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p>Timer</p>
          </div>
          <p className="timer">
            {stringifiedMinute}:{stringifiedSecond}
          </p>
          <div className="container-btn">
            <button type="button" onClick={this.onStart} className="start-btn">
              Start
            </button>
            <button type="button" onClick={this.onStop} className="stop-btn">
              Stop
            </button>
            <button type="button" onClick={this.onReset} className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
