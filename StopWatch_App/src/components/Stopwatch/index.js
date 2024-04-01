import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minute: 0, second: 0}
    this.timerID = null
  }
  tick = () => {
    this.setState(prevState => {
      if (prevState.second === 59)
        return {minute: prevState.minute + 1, second: 0}

      return {second: prevState.second + 1}
    })
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID)
    }
  }

  start = () => {
    this.timerID = setInterval(this.tick, 1000)
  }
  pause = () => clearInterval(this.timerID)
  reset = () => {
    this.setState({
      minute: 0,
      second: 0,
    })
    if (this.timerID) clearInterval(this.timerID)
  }

  render() {
    const {minute, second} = this.state
    const formattedMinute = minute < 10 ? `0${minute}` : minute
    const formattedSecond = second < 10 ? `0${second}` : second
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>
          <div className="watch">
            <div className="section1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="logo"
              />
              <p>timer</p>
            </div>
            <h4 className="time">
              {formattedMinute}:{formattedSecond}
            </h4>
            <div className="section2">
              <button className="btn1" onClick={this.start}>
                Start
              </button>
              <button className="btn2" onClick={this.pause}>
                Stop
              </button>
              <button className="btn3" onClick={this.reset}>
                Reset
              </button>{' '}
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
            alt="main"
            className="mainLogo"
          />
        </div>
      </div>
    )
  }
}
export default Stopwatch
