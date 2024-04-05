import './index.css'
import {useState} from 'react'
import HeadingComponent from './styledComponents.js'

const ReadMore = props => {
  const [showMore, setShowMore] = useState(false)
  const {reactHooksDescription} = props
  const firstHalf = reactHooksDescription.slice(0, 170)
  const secondHalf = reactHooksDescription.slice(0)
  const funcall = () => {
    setShowMore(showMore => !showMore)
  }
  return (
    <div className="main-container">
      <section className="main">
        <HeadingComponent />
        <p className="text">Hooks are a new addition to react</p>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
          className="img"
        />
        {showMore ? (
          <p className="text">{secondHalf}</p>
        ) : (
          <p className="text">{firstHalf}</p>
        )}
        <button onClick={funcall} className="btn">
          Read {showMore ? 'Less' : 'More'}
        </button>
      </section>
    </div>
  )
}
export default ReadMore
