import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setCountries(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('une erreur est subitement arrivée', error);
        setIsLoading(false);
      });
  }, []);

  function nextCountries() {
    setIndex(index => (index + 1) % countries.length);
  }

  function previousCountries() {
    setIndex(index => (index === 0 ? countries.length - 1 : index - 1));
  }

  return (
    <div className="mainContainer">
      <h1>Discover Flags</h1>
      <div className="containerInfo">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          countries.length > 0 && (
            <div className="BoxNamFlags box">
              <h2>{countries[index].name.common}</h2>
              <img src={countries[index].flags.png} alt={countries[index].name.common} />
              <div className="buttons">
                <button onClick={previousCountries} className="fantom">Previous</button>
                <button onClick={nextCountries}>Next</button>
              </div>
            </div>
          )
        )}
        {!isLoading && (
          <div className="BoxInfo box">
            <h2>Info</h2>
            <div className="contentInfo">
              <p>
                <span>Capital:</span>
                {countries[index]?.capital} 
              </p>
              <p>
                <span>Fifa:</span>
                {countries[index]?.fifa}
              </p>
              <p>
                <span>Languages:</span>
                {Object.values(countries[index]?.languages).join(", ")} 
              </p>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
