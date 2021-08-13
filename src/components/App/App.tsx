import React, { useEffect, useState }from 'react';
// import getAllCountries from "../../services/CountriesData";
// import { Route, Switch } from "react-router-dom";
import './App.scss';
import Header from '../Header/Header';
import CountriesList from '../Countries/list/CountriesList';
// import { CountriesService } from '../../common/services/CountriesService';


function App() {

  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   getAllCountries().then((data) => setCountries(data));
  // }, []);

  return (
    <main className="App">
      <Header/>
      <CountriesList/>
    </main>
  );
}

export default App;
