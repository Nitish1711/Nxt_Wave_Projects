import {useState} from 'react'
import './index.css'

const PasswordValidator = () => {
  const [text, setText] = useState(' ')

  const Changeinput = event => {
    setText(event.target.value)
  }
  const a = text.length

  const b = () => {
    if (a < 8) {
      return <p>Your password must be at least 8 characters </p>
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text heading"> Password Validator</h1>
        <p className="text"> Check how strong and secure is your password</p>
        <input
          type="password"
          className="text password"
          onChange={Changeinput}
        />
        <p className="error beer"> {b()}</p>
      </div>
    </div>
  )
}

export default PasswordValidator
