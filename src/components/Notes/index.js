import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  NotesC,
  Mainheading,
  NotesInputcontainer,
  TitleInputEle,
  TextInputEle,
  AddBtn,
  NoitemsC,
  NoitemsImage,
  NoitemsH,
  NoitemsPara,
  NotesItemsList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, setNoteslist] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeText = event => setText(event.target.value)

  const onAddNote = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      text,
    }
    setTitle('')
    setText('')
    setNoteslist(prevnotesList => [...prevnotesList, newNotes])
  }

  const Noitemscontainer = () => (
    <NoitemsC>
      <NoitemsImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoitemsH>No Notes Yet</NoitemsH>
      <NoitemsPara>Notes you add will appear here</NoitemsPara>
    </NoitemsC>
  )

  return (
    <>
      <NotesC>
        <Mainheading>Notes</Mainheading>
        <NotesInputcontainer onSubmit={onAddNote}>
          <TitleInputEle
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <TextInputEle
            rows="3"
            placeholder="Take a Note..."
            value={text}
            onChange={onChangeText}
          />
          <AddBtn type="submit">Add</AddBtn>
        </NotesInputcontainer>
        {notesList.length === 0 ? (
          Noitemscontainer()
        ) : (
          <NotesItemsList>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} eachNote={eachNote} />
            ))}
          </NotesItemsList>
        )}
      </NotesC>
    </>
  )
}

export default Notes
