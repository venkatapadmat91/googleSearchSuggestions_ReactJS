// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, displaySuggestion} = props
  const {suggestion} = eachItem

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="suggestion-item-con">
      <p className="suggestion-text">{suggestion}</p>
      <button className="delete-btn" onClick={onClickSuggestion} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="suggestion-arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
