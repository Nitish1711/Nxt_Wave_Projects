const Button = props => {
  //  Write your code here.
  return <button className={`btn ${props.className}`}>{props.name}</button>
}

const element = (
  //  Write your code here.

  <div className='main'>
    <h1 className='btn-txt'>Social Buttons</h1>

    <div className='main2'>
      <Button className='like auto-width' name='Like' />
      <Button className='comment auto-width' name='Comment' />
      <Button className='share auto-width' name='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
