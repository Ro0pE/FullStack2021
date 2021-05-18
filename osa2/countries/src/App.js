import React, { useState, useEffect } from 'react'
import axios from 'axios'

var isClicked = false
const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])
  const [showAll, setShowAll] = useState(false)
  
  
  const Country = ({country}) => {
   
    const clicked = () => {
      console.log('pushed', country.name)
      console.log('showAll ', showAll)
      console.log('filter ', filter)
      setFilter(country.name)
      isClicked = true;
      
    }
    return (
      <li>{country.name} <button onClick = {clicked}> show </button></li>
    )
  }
  console.log('filter new', filter)



  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('wat happens')
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = showAll
  ? countries
  : countries.filter(country => country.name.toLowerCase().includes(filter))
  
  console.log('showAll',showAll)
  console.log('countriesToShow',countriesToShow.length)  // tämä

  const handleFilter = (event) => {  
    console.log(event.target.value)

    setFilter(event.target.value)
    
  }
  if (isClicked === true) {
    for (var i = 0; i < countries.length; i++){
      if (countries[i].name === filter){
        return (
          <div>
            <button>Find countries
              <input onChange = {handleFilter}>
              </input>
            </button>
            <div>
      
            <h1>{countries[i].name}</h1>
            <li>Capital: {countries[i].capital}</li>
            <li>Population: {countries[i].population}</li>
            <h2>Languages:</h2>
            <ul>
              {countries[i].languages.map(lang =>
              <li>{lang.name}</li>)}
            </ul>
            <img src="" width="400" height="200" src = {countries[i].flag}/>
            <h3>Weather in {countries[i].capital}</h3>
                    
            </div>
      
          </div>
        )
      }
    }
    isClicked = false;
    
  }





if (countriesToShow.length === 1){

  return (
    <div>
      <button>Find countries
        <input onChange = {handleFilter}>
        </input>
      </button>
      <div>

      <h1>{countriesToShow[0].name}</h1>
      <li>Capital: {countriesToShow[0].capital}</li>
      <li>Population: {countriesToShow[0].population}</li>
      <h2>Languages:</h2>
      <ul>
        {countriesToShow[0].languages.map(lang =>
        <li>{lang.name}</li>)}
      </ul>
      <img src="" width="400" height="200" src = {countriesToShow[0].flag}/>
      <h2>Weather in {countriesToShow[0].capital}:</h2>      
      </div>

    </div>
  )
}



if (countriesToShow.length > 10){

  return (
    <div>
      <button>Find countries
        <input onChange = {handleFilter}>
        </input>
      </button>
      <ul>
    Too many matches, specify another filter.
      </ul>
    </div>
  )
} else {

  return (
    <div>
      <button>Find countries
        <input onChange = {handleFilter}>
        </input>
      </button>
      <ul>
        {countriesToShow.map(country =>
          <Country key = {country.id} country = {country}/>
          
        )}
        
      </ul>
    </div>
  )

}
}
export default App;
