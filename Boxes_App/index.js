const Box = props => {
  const {className, name} = props
  return <div className={`box ${className}`}>{name}</div>
}

const element = (
  <div className='main'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes'>
      <Box className='small' name='Small' />
      <Box className='medium' name='Medium' />
      <Box className='large' name='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
