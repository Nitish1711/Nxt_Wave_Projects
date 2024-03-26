const Notification = props => {
  const {text, symbol1, notificationClass} = props
  return (
    <div className={`notification ${notificationClass}`}>
      <p>
        <img className='symbol' src={symbol1} alt='symbol' />
      </p>
      <p>{text}</p>
    </div>
  )
}

const element = (
  <div className='notification-container'>
    <h1 className='heading'>Notifications</h1>

    <Notification
      text='Information Message'
      symbol1='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      notificationClass='not1'
    />
    <Notification
      text='Success Message'
      symbol1='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      notificationClass='not2'
    />
    <Notification
      text='Warning Message'
      symbol1='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      notificationClass='not3'
    />
    <Notification
      text='Error Message'
      symbol1='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      notificationClass='not4'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
