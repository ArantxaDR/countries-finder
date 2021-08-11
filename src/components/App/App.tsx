import React from 'react';
// import getAllCountries from "../../services/CountriesData";
// import { Route, Switch } from "react-router-dom";
import './App.scss';
import Header from '../Header/Header';
import CountriesCard from '../Countries/CountriesCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <CountriesCard/>
    </div>
  );
}

export default App;
