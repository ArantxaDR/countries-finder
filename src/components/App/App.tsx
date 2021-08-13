import React, { useEffect, useState }from 'react';
// import getAllCountries from "../../services/CountriesData";
// import { Route, Switch } from "react-router-dom";
import {Country} from '../../common/interfaces/Country';
import './App.scss';
import Header from '../Header/Header';
import CountriesList from '../Countries/list/CountriesList';
 import { countriesService } from '../../common/services/CountriesService';


function App() {

   const [countries, setCountries] = useState<Country[]>(); useState([]);

  useEffect(() => {
    countriesService.getAllCountries().then((data) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <main className="App">
      <Header/>
      <CountriesList/>
    </main>
  );
}

export default App;
