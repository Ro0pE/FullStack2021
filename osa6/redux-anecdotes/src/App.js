
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import anecdoteService from './service/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => props.initializeAnecdotes(anecdotes))
  }, []) // eslint-disable-line

  return (
    <div>
      <Notification />
      <h1>Anecdotes</h1>
      <AnecdoteList />   
      <p></p>
      <AnecdoteForm />
      <Filter />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, { initializeAnecdotes })(App)   
