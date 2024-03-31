import './index.css'
import {Component} from 'react'

class LetterCalculator extends Component {
  state = {letters: ''}

  cal = event => {
    this.setState({
      letters: event.target.value,
    })
  }

  render() {
    const {letters} = this.state

    const a = letters.length

    return (
      <div className="main-container">
        <div className="container">
          <div className="left">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="ip1">
              <label className="lbl" htmlFor="phrase">
                Enter the phrase
              </label>
              <input
                className="ip"
                type=""
                id="phrase"
                placeholder="Enter the phrase"
                onChange={this.cal}
              />
            </div>
            <p className="para">
              <b>No.of letters: {a}</b>
            </p>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator
