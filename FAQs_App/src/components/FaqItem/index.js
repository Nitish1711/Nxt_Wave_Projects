import './index.css'

import {useState} from 'react'

const FaqItem = props => {
  const [show, notshow] = useState(true)

  const {details} = props
  const {questionText, answerText} = details

  const Change = () => {
    notshow(!show)
  }

  const a = show
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

  const b = show ? 'plus' : 'minus'

  const Hide = () => {
    if (show === false) {
      return <p className="para">{answerText}</p>
    }
  }
  return (
    <li className="faq-item">
      <div className="row">
        <h5 className="qt">{questionText}</h5>
        <botton onClick={Change} className="btn">
          <img src={a} alt={b} />
        </botton>
      </div>

      {Hide()}
    </li>
  )
}

export default FaqItem
