import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  gen = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading1">Random Number</h1>
          <p className="para">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button className="btn" onClick={this.gen}>
            Generate
          </button>
          <h1 className="heading2">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
