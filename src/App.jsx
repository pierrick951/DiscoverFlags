import { useState, useEffect } from "react";
import { ChevronLeft,ChevronRight  } from 'lucide-react';
import './App.css';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all ")
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
      <div className="bg-red-500 h-30 w-full sm:w-[450px]  rounded-xl shadow-xl">
        <div className="flex justify-center w-full">
          <h2 className="text-2xl py-2 font-semibold text-gray-300">Flags App</h2>
        </div>
        <div className="h-auto py-5 rounded-sm flex justify-center flex-col items-center">
          <div className="w-1/2">
            {isLoading ? (<p>Chargement ...</p>) : (<img className="w-30 rounded-t-xl py-2 h-30" src={countries[index].flags.svg} alt="" />)}
          </div>
          <div className="flex items-center justify-center py-2 bg-slate-200 w-1/2 rounded-b-xl h-auto">
            {isLoading ? (<p>Chargement ...</p>) : (<p className="text-zinc-900  text-xl  truncate font-karla">{countries[index].name.common}</p>)}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-b-md py-2 flex   justify-center">

          <button  className="bg-red-500 rounded-xl py-2 px-2 shadow-sm mx-1 active:bg-red-800" onClick={()=> previousCountries()}>
          <ChevronLeft color="#f1f1f1" />
          </button>
          <button className="bg-red-500 rounded-xl py-2 px-2 shadow-sm  active:bg-red-800 mx-1" onClick={() => nextCountries()}>
          <ChevronRight color="#f1f1f1" />
          </button>
        </div>
      </div>
    </div>
  );
}
