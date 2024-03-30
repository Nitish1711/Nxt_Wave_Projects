import React, {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '..//Message'
import './index.css'

class Home extends Component {
  state = {
    loggedIn: true,
  }

  change = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn,
    }))
  }

  render() {
    const {loggedIn} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <Message loggedIn={loggedIn} />
          {loggedIn ? (
            <Login change={this.change} />
          ) : (
            <Logout change={this.change} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
