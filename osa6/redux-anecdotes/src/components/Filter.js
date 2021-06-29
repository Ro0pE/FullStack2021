  
import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChangeFilter = (event) => {
    props.filterAnecdotes(event.target.value)
  }
  return (
    <div>
      Filter anecdotes: <input onChange={handleChangeFilter} />
    </div>
  )
}

export default connect(null, { filterAnecdotes })(Filter)