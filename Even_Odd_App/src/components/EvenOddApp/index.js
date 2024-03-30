import React, {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    num: 0,
    text: 'even',
  }

  increment = () => {
    const randomIncrement = Math.floor(Math.random() * 101)
    const newTotal = this.state.num + randomIncrement
    this.setState({
      num: newTotal,
      text: newTotal % 2 === 0 ? 'Even' : 'Odd',
    })
  }

  render() {
    const {num, text} = this.state

    return (
      <div className="container">
        <div className="main">
          <h1>Count {num}</h1>
          <p className="para">Count is {text}</p>
          <button className="btn" onClick={this.increment}>
            Increment
          </button>
          <p className="para1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
