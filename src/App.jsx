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
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center">
      <div className="bg-red-500 h-auto w-[500px] rounded-xl">
        <div className="flex justify-center w-full">
          <h2 className="text-2xl py-2 font-semibold text-gray-300">Flags App</h2>
        </div>
        <div className="h-auto py-5 rounded-sm flex justify-center flex-col items-center">
          <div className="w-1/2">
            {isLoading ? (<p>Chargement ...</p>) : (<img className="  w-30 pb-5" src={countries[index].flags.svg} alt="" />)}
          </div>
          <div className="flex items-center justify-center py-5 bg-red-200 w-1/2 rounded-xl">
            {isLoading ? (<p>Chargement ...</p>) : (<p className="text-zinc-900  text-xl font-karla">{countries[index].name.common}</p>)}
          </div>

        </div>
      </div>
    </div>
  );
}
