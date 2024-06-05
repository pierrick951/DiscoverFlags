import { useState, useEffect } from "react"

import './App.css'


export default function App() {

  const [countries, setCountries] = useState([])
  const [index ,setIndex] = useState(0)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCountries(response)

      })
      .catch(error => {
        console.log('une ereure est subitement arrivée', error)
      })
  }, [])


  function nextCountries(){
        setIndex(index => (index + 1) % countries.length)
   
  }
  function PreviousCountries(){
        setIndex(index => (index === 0  ? countries.length -1 : index -1))
   
  }
  return (
    <div className="mainContainer">
      <h1> Discover Flags</h1>
      <div className="containerInfo">

  
      
          <div className="BoxNamFlags box">
            <h2>{countries[index].name.common}</h2>
            <img src={countries[index].flags.png} alt={countries[index].name.common} />
            <div className="buttons">
              <button onClick={() => PreviousCountries()}
              className="fantom">Previous</button>
              <button onClick={() => nextCountries()}>Next</button>
            </div>
          </div>

          <div className="BoxInfo box">
           <h2>Info</h2>
           <div className="contentInfo">
            <p></p>
           </div>
          </div>
     
     
        </div>
      </div>

  )
}