// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props

    const filterSearchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="google-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="google-card-container">
          <div className="google-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="google-search-icon"
              alt="search icon"
            />
            <input
              type="search"
              value={googleSearch}
              placeholder="Search Google"
              className="google-search-input"
              onChange={this.searchUserInput}
            />
          </div>
          <ul className="suggestions-items-container">
            {filterSearchResult.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
