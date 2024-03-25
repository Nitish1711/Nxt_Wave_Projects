const element = (
  //   Write your code here.
  <div className='box'>
    <h1 className='heading'>Super Over League</h1>
    <div className='image-container'>
      <img
        className='greeting-1'
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
      />
      <img
        className='greeting-2'
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
