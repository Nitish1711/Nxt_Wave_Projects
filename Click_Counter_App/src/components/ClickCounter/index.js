import {useState} from 'react'
import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const onChangeCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <h1 className="heading text">
        The Button has been clicked <br />
        <span className="counter">{count}</span> times
      </h1>
      <p className="text para">Click the button to increase the count!</p>
      <button className="text btn" onClick={onChangeCount}>
        Click Me!
      </button>
    </div>
  )
}

export default ClickCounter
