import {ItemsC, ItemsCH, ItemsCP} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {title, text} = eachNote
  return (
    <ItemsC>
      <ItemsCH>{title}</ItemsCH>
      <ItemsCP>{text}</ItemsCP>
    </ItemsC>
  )
}

export default NoteItem
