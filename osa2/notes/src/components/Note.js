import React from 'react'

const Note = ({ note , toggleImportance}) => {
  const label = note.important     // tehdään buttonin label
  ? 'make important' : 'make not important'    // joko tai, make important or make not
  return (
    <li>
      {note.content}
      <button onClick = {toggleImportance}>{label}</button>
      </li>
  )
}

export default Note