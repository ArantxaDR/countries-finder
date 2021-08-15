import React, { useEffect, useState }from 'react';
//import {WorldMap} from 'react-svg-worldmap';
import './App.scss';
import Header from '../Header/Header';
import CountriesList from '../Countries/list/CountriesList';
import CountryDetail from '../Countries/details/CountryDetail';
import { countriesService } from '../../common/services/CountriesService';
import { IFilter } from '../../common/interfaces/IFilter';
import { Route } from 'react-router-dom';

function App() {

   const [countries, setCountries] = useState<any[]>(); 
   const [countriesFiltered, setCountriesFiltered] = useState<any[]>(); 
   const [nameFilter, setNameFilter] = useState<string>();
   const [regionFilter, setRegionFilter] = useState<string>();
   const [languageFilter, setLanguageFilter] = useState<string>();
   
   useEffect(() => {
    countriesService.getAllCountries().then((data) => {
      setCountries(data);
      setCountriesFiltered(data);            
    });
  }, []);

  useEffect(() => {    
    if(nameFilter !== "" && nameFilter !== undefined ){
      countriesService.getCountriesByName(nameFilter).then((data) => {
        setCountriesFiltered(data);
      });
    }
    
    if(regionFilter !== "All" && regionFilter !== undefined ){
      let countriesByRegion : any = countriesFiltered?.filter(country => country.region === regionFilter);
      setCountriesFiltered(countriesByRegion);
    }
  
    if(languageFilter !== ""  && languageFilter !== undefined ){
    //https://stackoverflow.com/questions/66301241/how-to-filter-an-array-of-nested-objects-javascript
	    let countriesByLanguage = countriesFiltered?.filter((country: { languages: any[]; }) => country.languages?.some((language: { iso639_1: string; }) => language.iso639_1 === languageFilter));
      setCountriesFiltered(countriesByLanguage);
    }

  }, [nameFilter,regionFilter,languageFilter]);

  const handleFilters = (filter:IFilter) => {
    if (filter.key === "name") {
      setNameFilter(filter.value);
    } else if (filter.key === "region") {
      setRegionFilter(filter.value);
    } else if (filter.key === "language") {
      setLanguageFilter(filter.value);
      //console.log(filter);
    }
    //setCountriesFiltered(countries);
  };
  
  const renderCountryDetail = (props:any) => {
    
    const countryName = props.match.params.name;

      
    const findCountry = countries?.find((country) => country.name === countryName);
   
    
    return <CountryDetail country={findCountry} />;
  };
  
  // const data = 
  // [
  //   { country: "es", value: 1}
  // ]

  return (
    <main className="App">
     
      <Header handleFilters={handleFilters}/>
      {/* <WorldMap color="green" title ="Fav countries" size ="responsive" data = {data}/> */}
      <Route exact path ="/">
      <CountriesList countries = {countriesFiltered}/>
      </Route>
      <Route path="/countries/:name" render= 
      {renderCountryDetail}>

      </Route>
        
    </main>
  );
}

export default App;
