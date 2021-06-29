
import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer.js'

const AnecdoteList = (props) => {

  const voteAnecdote = (anecdote) => {
    props.addVote(anecdote)
    props.showNotification(`You voted anecdote: '${anecdote.content}'`, 7)
  }

  return (
    <div>
      {props.anecdotesToShow.map(anecdote =>
        <div key={anecdote.id}>
          <li className="anecdoteText">{anecdote.content} has {anecdote.votes} votes <button className="vote" onClick={() => voteAnecdote(anecdote)}>vote</button></li>         
          <div>   
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    anecdotesToShow: state.anecdotes
      .filter(anecdote =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes), //filtteröi anekdootit ja sorttaa
    filter: state.filter
  }
}


const mapDispatchToProps = {
  addVote,
  showNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)