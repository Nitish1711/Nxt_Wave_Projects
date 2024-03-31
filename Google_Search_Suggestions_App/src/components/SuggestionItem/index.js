import './index.css'

const SuggestionItem = props => {
  const {userDetails, arrowItem} = props
  const {suggestion} = userDetails

  const onArrow = () => {
    arrowItem(suggestion)
  }

  return (
    <div className="row">
      <p className="para">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onArrow} />
    </div>
  )
}
export default SuggestionItem
