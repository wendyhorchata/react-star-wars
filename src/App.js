import {useState, useEffect} from 'react'
import './App.css';

 const getStarship = (setStarship) => fetch("https://swapi.dev/api/starships/")
  .then(response => response.json())
  .then(setStarship)
  
   function App(props) {

  const [starship, setStarship] = useState([])
useEffect(() =>{getStarship(setStarship)}, [])

if(starship.length <= 0) {
  return <h2>Hold On</h2> 
}
  return (
    <div className="App">
      <h1 className="Starships">Starwars StarShips</h1>
      <div className='container'>
      {starship?.results.map((ship, index)=>{
        return <div className='ship' key={index}>{ship.name}</div>
      })
    }
      
        </div>
    </div>
  )
  
}


export default App;
