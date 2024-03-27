import './index.css'
import {useState} from 'react'
const Unlock = () => {
  const [unlock, setUnlock] = useState(false)
  const [text1, setText1] = useState('Locked')
  const [text2, setText2] = useState('Unlock')

  const change = () => {
    setUnlock(!unlock)
    setText1(unlock ? 'Locked' : 'Unlocked')
    setText2(unlock ? 'Unlock' : 'Lock')
  }
  return (
    <div className="container">
      {unlock && (
        <img
          className="img-tag"
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      {!unlock && (
        <img
          className="img-tag"
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}

      <p className="text"> Your Device is {text1}</p>
      <button onClick={change}>{text2}</button>
    </div>
  )
}
export default Unlock
