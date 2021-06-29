import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer.js'

const AnecdoteForm = (propsit) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    propsit.createAnecdote(content)

    propsit.showNotification(`you successfully added an anecdote: '${content}'`, 7)
  }

  return (
    <div>
      <form onSubmit={addAnecdote}>
      <button type="submit">Create new </button>
        <input name="anecdote" />
      </form>
    </div>
  )
}

export default connect(null, { createAnecdote, showNotification })(AnecdoteForm)