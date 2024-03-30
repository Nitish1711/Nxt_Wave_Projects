import {Component} from 'react'
import './index.css'

class Hide extends Component {
  state = {
    firstname: false,
    lastname: false,
  }

  toggleFirstName = () => {
    this.setState(prevState => ({
      firstname: !prevState.firstname,
    }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({
      lastname: !prevState.lastname,
    }))
  }

  Welcome = ({greeting, name}) => {
    return <p className="message">{greeting}</p>
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="container">
        <div className="box">
          <h1 className="h1">Show/Hide</h1>
          <div className="button-container">
            <div className="button-section">
              <button onClick={this.toggleFirstName}>
                Show/Hide Firstname
              </button>
              {firstname && (
                <div className="name-box">
                  <this.Welcome greeting="Joe" />
                </div>
              )}
            </div>
            <div className="button-section">
              <button onClick={this.toggleLastName}>Show/Hide Lastname</button>
              {lastname && (
                <div className="name-box">
                  <this.Welcome greeting="Jonas" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hide
