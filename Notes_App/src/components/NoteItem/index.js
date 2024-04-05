import './noteitem.css'

const NoteItem = props => {
  const {title, content} = props.item
  return (
    <div className="item">
      <li className="li1" key={title}>
        <h1 className="heading1">{title}</h1>
        <p className="para1">{content}</p>
      </li>
    </div>
  )
}
export default NoteItem
