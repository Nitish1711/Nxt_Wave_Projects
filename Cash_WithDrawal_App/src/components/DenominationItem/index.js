import './index.css'
const DenominationItem = props => {
  const {denominationsList, onDecrease, balance} = props
  const {value} = denominationsList

  const handleDecrease = () => {
    onDecrease(value)
  }

  return (
    <li className="li">
      <button className="btn" type="button" onClick={handleDecrease}>
        <b>{value}</b>
      </button>
    </li>
  )
}

export default DenominationItem
