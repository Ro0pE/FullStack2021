const Course = (props) =>{   // muista, että propsit tulee tänne eikää .. 
    console.log(props.course)
    const otsikko = props.course
    const Header = () => {  // ..tänne
  
      return (
        <>
        <h1>{otsikko.name}</h1>
        </>
      )
    }
    const Content = () => {
  
    const exersices = props.course.parts.map(part => part.exercises)  // tungetaan kurssien tehtävien määrät listaan , [10,7,14]
  
    var summa = exersices.reduce(function(a, b){  // lasketaan kurssien summa
      return a + b;
      }, 0);
    console.log(summa)
  
      return ( // muista laittaa key = part.id tai tulee erroria consoleeen
         <div>
           <ul>
             {props.course.parts.map(part => <li key ={part.id} >{part.name} {part.exercises}</li>)}  
           </ul>
           <p>Total of {summa} exercises</p>
         </div>
      )
    }
    return (
      <>
      <Header otsikko/>
      <Content />
      </>
    )
  
  }
  export default Course