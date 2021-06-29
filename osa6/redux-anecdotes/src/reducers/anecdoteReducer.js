import anecdoteService from '../service/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
  case 'VOTE':
    return state.map(anecdote => anecdote.id !== action.data.id ? anecdote : action.data)
  case 'ADD ANECDOTE':
    if (state.find(anecdote => anecdote.content === action.data.content)){  // toimii vaan frontissa atm
      console.log('on jo listalla')
      return state
    }

    return [...state, action.data]
  case 'INIT ANECDOTES':
    return action.data
  default:
    return state
  }
}
// const getId = () => (100000 * Math.random()).toFixed(0)


export const createAnecdote = (content) => {

  return async dispatch => {
    try {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD ANECDOTE',
      data: newAnecdote
    })
  }catch(error){
    console.log(error)
  }
  }

}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT ANECDOTES',
    data: anecdotes,
  }
}

export const addVote = anecdote => {
  return async dispatch => {
    const newVoteCount = anecdote.votes + 1
    const votedAnecdote = { ...anecdote, votes: newVoteCount }
    const updatedAnecdote = await anecdoteService.vote(anecdote.id, votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export default anecdoteReducer