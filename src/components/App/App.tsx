import React, { useEffect, useState }from 'react';
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
    let countriesToShow: any[];

    if(nameFilter !== "" && nameFilter !== undefined){
      countriesService.getCountriesByName(nameFilter).then((data) =>{

        countriesToShow = data;
      
        filterByRegionLanguage(countriesToShow);
      });
    } else {
      if(countries !== undefined)
      filterByRegionLanguage(countries);

    }
      
  }, [countries,nameFilter,regionFilter,languageFilter]);

  const filterByRegionLanguage = (countriesToShow : any[]) => {

    if(regionFilter !== "All" && regionFilter !== undefined){
      let countriesByRegion : any = countriesToShow?.filter(
        country => country.region === regionFilter);
        countriesToShow = countriesByRegion;
    }

    if(languageFilter !== "" && languageFilter !== undefined){
      //https://stackoverflow.com/questions/66301241/how-to-filter-an-array-of-nested-objects-javascript
      let countriesByLanguage = countriesToShow?.filter((country: { languages: any[]; }) => country.languages?.some((language: { iso639_1: string; }) => language.iso639_1 === languageFilter));
      countriesToShow = countriesByLanguage;
    }

    setCountriesFiltered(countriesToShow);
  };

  const handleFilters = (filter:IFilter) => {
    if (filter.key === "name") {
      setNameFilter(filter.value);
    } else if (filter.key === "region") {
      setRegionFilter(filter.value);
    } else if (filter.key === "language") {
      setLanguageFilter(filter.value);    
    }
    
  };
  
  const renderCountryDetail = (props:any) => {
    
    const countryName = props.match.params.name;

      
    const findCountry = countries?.find((country) => country.name === countryName);
   
    
    return <CountryDetail country={findCountry} />;
  };
  


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
