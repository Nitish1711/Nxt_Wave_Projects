import './index.css'

const TodoItem = props => {
  const {userDetails, deleteUser} = props
  const {id, title} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="box">
      <p className="para">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
