import React from 'react'

const App = (props) => {

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
 
}
const partit = course.parts.map((part)=>
<li>{part.name} &nbsp;  {part.exercises} </li>
)



  return (
    <div>
      <h1>{course.name}</h1>
      <p>{partit}</p>
      <Total total/>
    </div>
  )
}



const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = (exercises1 + exercises2 + exercises3)
  return (
    <p>Number of exercises {total}</p>  
  )

}

export default App  // ilman tätä, komponentti ei näy tiedostoon index.js!