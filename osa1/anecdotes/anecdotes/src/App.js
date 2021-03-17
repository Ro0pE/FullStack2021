import React, { useState } from 'react'

const App = () => {

  
   
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const random = getRandomInt(6);
  
 
  const [zero, setZero] = useState(0)
  const [one, setOne] = useState(0)
  const [two, setTwo]= useState(0)
  const [three, setThree] = useState(0)
  const [four, setFour] = useState(0)
  const [five, setFive] = useState(0)
  const [bonus, setBonus] = useState(0)

  const taulukko = [
    zero,one,two,three,four,five
  ]


  const TopVotedAnecdote = () => {

    let i = taulukko.indexOf(Math.max(...taulukko));
    const topVotedAnecdote = anecdotes[i]
    if ((Math.max(...taulukko) === 0)){
      return (
        <h1>No anecdotes</h1>

      )
    } else {

    return (
      <>
      <h1>Anecdote with most votes</h1>
      <p>{topVotedAnecdote}</p>
      <p>Has {Math.max(...taulukko)} votes</p>
      </>
    )
    }
  }


  
 

  const handleClick = () =>  {
    if (random === 0){
      setZero(zero+1)
    }
    if (random === 1){
      setOne(one+1)
    }
    if (random === 2){
      setTwo(two+1)
    }
    if (random === 3){
      setThree(three+1)
    }
    if (random === 4){
      setFour(four+1)
    }
    if (random === 5){
      setFive(five+1)
    }
    
   
  }

  
  
  function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  
 

  return (
    <div>

      <h1>Anecdote of the day</h1> 
      <p>{anecdotes[random]}</p>
      <span><VoteValue numero = {random} zero = {zero} one = {one} two = {two} three = {three} four = {four} five = {five}/></span>
      <button onClick={handleClick}> Vote</button>
      <button onClick={() => setBonus(bonus + 1)}> Next Anecdote</button>
      <span><TopVotedAnecdote /></span>                       
      </div>
  )
}
const VoteValue = (props) => {
  if (props.numero === 0){
    return (
      <div>
        <p>Has {props.zero} votes</p>
      </div>
    )
  } 

  if (props.numero === 1){
    return (
      <div>
        <p>Has {props.one} votes</p>
      </div>
    )
  }
  if (props.numero === 2){
    return (
      <div>
        <p>Has {props.two} votes</p>
      </div>
    )
  } 
  if (props.numero === 3){
    return (
      <div>
        <p>Has  {props.three} votes</p>
      </div>
    )
  } 
  if (props.numero === 4){
    return (
      <div>
        <p>Has  {props.four} votes</p>
      </div>
    )
  } 
  if (props.numero === 5){
    return (
      <div>
        <p>Has {props.five} votes</p>
      </div>
    )
  } 

}


export default App