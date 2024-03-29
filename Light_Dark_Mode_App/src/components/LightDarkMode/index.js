import './index.css'
import {useState} from 'react'

const LightDarkMode = () => {
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
    text: 'Dark',
  })

  const onChangeMode = () => {
    setMode(mode => ({
      color: mode.color === 'black' ? 'white' : 'black',
      backgroundColor: mode.backgroundColor === 'white' ? 'black' : 'white',
      text: mode.text === 'Dark' ? 'Light' : 'Dark',
    }))
  }

  return (
    <div className="main-box">
      <div className="box" style={mode}>
        <h1>Click To Change Mode</h1>
        <button onClick={onChangeMode} className="btn">
          {mode.text} Mode
        </button>
      </div>
    </div>
  )
}

export default LightDarkMode
