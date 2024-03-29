import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  change = () => {
    this.setState(prevState => ({
      text: prevState.text === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }

  render() {
    const {text} = this.state
    return (
      <div className="box">
        <h1 className="header">Welcome</h1>
        <p className="p"> Thank you! Happy Learning</p>
        <button className="btn" onClick={this.change}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
