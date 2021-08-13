import React, { useEffect, useState }from 'react';
import {Country} from '../../common/interfaces/Country';
import './App.scss';
import Header from '../Header/Header';
import CountriesList from '../Countries/list/CountriesList';
import { countriesService } from '../../common/services/CountriesService';


function App() {

  

   const [countries, setCountries] = useState<any[]>(); 

  useEffect(() => {
    countriesService.getAllCountries().then((data) => setCountries(data));
  }, []);

  return (
    <main className="App">
      <Header/>
      <CountriesList countries = {countries}/>
    </main>
  );
}

export default App;
