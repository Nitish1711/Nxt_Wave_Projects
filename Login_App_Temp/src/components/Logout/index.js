import './index.css'

const Logout = props => {
  const {change} = props

  return (
    <div>
      <button onClick={change}>Logout</button>
    </div>
  )
}
export default Logout
