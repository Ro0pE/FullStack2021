const Filter = (props) => {



   const setFilter = props.setFilter
  

    
    const setFilterValue = (event) => {  // aseta filtterin value
      setFilter(event.target.value)
    }


    return (
        <div>
             Filter shown with: <input onChange={setFilterValue}/> 
        </div>
    )




}

export default Filter