import React, { useEffect, useState }from 'react';
import {WorldMap} from 'react-svg-worldmap';
import './App.scss';
import Header from '../Header/Header';
import CountriesList from '../Countries/list/CountriesList';
import { countriesService } from '../../common/services/CountriesService';


function App() {

  

   const [countries, setCountries] = useState<any[]>(); 

  useEffect(() => {
    countriesService.getAllCountries().then((data) => setCountries(data));
  }, []);

  const data = 
  [
    { country: "es", value: 1}
  ]

  return (
    <main className="App">
      <Header/>
      <WorldMap color="green" title ="Fav countries" size ="responsive" data = {data}/>
      <CountriesList countries = {countries}/>
    </main>
  );
}

export default App;
