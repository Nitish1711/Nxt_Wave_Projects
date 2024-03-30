import React from 'react'
import './index.css'
const Message = props => {
  const {loggedIn} = props
  return <h1>{loggedIn ? 'Please Login' : 'Welcome User'}</h1>
}

export default Message
