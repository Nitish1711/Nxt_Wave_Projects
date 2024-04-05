import {useState} from 'react'
import './notes.css'
import NoteItem from '../NoteItem'
import HeadingComponent from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [noteList, setNoteList] = useState([
    {title: 'Nitish', content: 'He is a Good Boy'},
    {title: 'Nitish', content: 'He is a Good Boy'},
    {
      title: 'Nitish',
      content:
        'He is a Good Boy  Instead, you should create it as a JavaScript object. Heres the corrected version:',
    },
  ])

  const addTitle = event => {
    setTitle(event.target.value)
  }

  const addContent = event => {
    setContent(event.target.value)
  }

  const addItem = () => {
    const newItem = {title: title, content: content}
    setNoteList(prevNoteList => [...prevNoteList, newItem])
    setTitle('')
    setContent('')
  }

  return (
    <div className="main-container">
      <div className="main">
        <HeadingComponent />
        <form className="box">
          <input
            type="text"
            onChange={addTitle}
            placeholder="Title"
            className="title"
            value={title}
          />
          <textarea
            placeholder="Take a Note..."
            onChange={addContent}
            className="Note"
            value={content}
          />
          <button type="button" onClick={addItem}>
            Add
          </button>
        </form>
        {noteList.length === 0 ? (
          <div className="full">
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
              className="images"
            />
            <h1 className="heading">No Notes Yet</h1>
            <p className="para">Notes you add will appear here</p>
          </div>
        ) : (
          <ul className="ul-list">
            {noteList.map((eachItem, index) => (
              <NoteItem item={eachItem} key={index} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Notes
