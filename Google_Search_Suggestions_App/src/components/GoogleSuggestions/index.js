import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  arrowItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props

    const filteredSuggestions = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="container1">
            <input
              className="search-place"
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="Search Google"
            />
            <ul className="list">
              {filteredSuggestions.map(eachItem => (
                <SuggestionItem
                  userDetails={eachItem}
                  key={eachItem.id}
                  arrowItem={this.arrowItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
