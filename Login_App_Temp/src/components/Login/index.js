import './index.css'

const Login = props => {
  const {change} = props

  return (
    <div>
      <button onClick={change}>Login</button>
    </div>
  )
}
export default Login
