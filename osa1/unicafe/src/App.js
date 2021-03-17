import React, { useState } from 'react'


const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value} {props.text2}</p>
    </div>
  )

}

const Statistic = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  if (good === 0 && neutral === 0 && bad ===0) {  

    return (
      
      <font size = "5">
      <p>No feedback given</p> 
      </font> 
      
    )
  
} else {

  const all = (good + neutral + bad)
  const goods = (good * 1)
  const neutrals = (neutral * 0)
  const goodPros = goods / all * 100
  const bads = (bad * -1)
  
  const average =((goods + neutrals + bads) / all )
  

      return (
        <div>
            <font size = "5">
               <h1> Statistics </h1> 
            
          <table>
            <tbody> 
              <tr>
              <td><StatisticLine text = 'good' value ={good}/></td>
              </tr>
              <tr>
                <td><StatisticLine text = 'neutral' value ={neutral}/></td>
              </tr>
              <tr>
                <td><StatisticLine text = 'bad' value ={bad}/></td>
              </tr>
              <tr>
                <td><StatisticLine text = 'all' value = {all}/></td>
              </tr>
              <tr>
               <td><StatisticLine text = 'average' value = {average} /></td>
              </tr>
              <tr>
               <td><StatisticLine text = 'positive' value = {goodPros} text2 = '%'/></td>
              </tr>
              
            </tbody>  
          </table>   
          </font>
        </div>
  )  
  }  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  const otsikko = <Header/>
  
  const handleButtonGood  = () => {
  setGood(good+1)

}
  const handleButtonNeutral  = () => {
  setNeutral(neutral+1)
 

}
  const handleButtonBad  = () => {
  setBad(bad+1)
 


}

  

 
  return (  // Tässä on buttonien käsittelyä, porauta nää kaaliin!
    <div>
      {otsikko}
      <Button handleClick={handleButtonGood} text ='Good' />
      <Button handleClick={handleButtonNeutral} text ='Neutral' />
      <Button handleClick={handleButtonBad} text ='Bad' /> 
      <Statistic good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

const Header = () => {
  return (
    <h1>Give Feedback</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



export default App