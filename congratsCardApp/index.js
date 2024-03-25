const element = (
  // Write your code here.
  <div className='main-box'>
    <div className='main-box1 text'>
      <h1>Congratulations</h1>
      <div className='main-box2'>
        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
        <h2 className='text'>Kiran V</h2>
        <p className='text'>
          Vishnu Institute of Computer Education and Technology,
          <br />
          Bhimavaram
        </p>
        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
