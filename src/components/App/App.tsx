import React, { useEffect, useState }from 'react';
import { Route, useHistory } from 'react-router-dom';
import { countriesService } from '../../common/services/CountriesService';
import { ICountry, ILanguages } from '../../common/interfaces/ICountry';
import { IFilter } from '../../common/interfaces/IFilter';
import ls from '../../common/services/LocalStorageService';
import Header from '../Header/Header';
import CountriesList from '../Countries/list/CountriesList';
import CountryDetail from '../Countries/details/CountryDetail';
import Footer from '../Footer/Footer';
import FavCountries from '../Favs/FavCountries';
import './App.scss';
import { ISearch } from '../../common/interfaces/ISearch';


function App() {

   const [countries, setCountries] = useState<ICountry[]>(); 
   const [countriesFiltered, setCountriesFiltered] = useState<ICountry[]>(); 
   const [favs, setFavs] = useState<ICountry[]>([]);
   const [nameFilter, setNameFilter] = useState<string>();
   const [regionFilter, setRegionFilter] = useState<string>();
   const [languageFilter, setLanguageFilter] = useState<string>();
   const [isLoading, setIsLoading] = useState(false);   

   const history = useHistory();

   const handleHistory = ()=> history.push("/");
      
  useEffect(() => {
    setIsLoading(true);
    countriesService.getAllCountries().then((data) => {
      setCountries(data);
      setCountriesFiltered(data);   
      setIsLoading(false);         
    });
  }, []);

  useEffect(() => {
		const  favoritCountries : ICountry[] = ls.get("favoritCountries", []);
    setFavs(favoritCountries);	    		
		}, []);

  useEffect(() => {
    
    handleHistory();
    setIsLoading(true);
    let countriesToShow: ICountry[];

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
  

  const filterByRegionLanguage = (countriesToShow : ICountry[]) => {

    if(regionFilter !== "All" && regionFilter !== undefined){
      let countriesByRegion : ICountry[] = countriesToShow.filter(
        country => country.region === regionFilter);
        countriesToShow = countriesByRegion;
    }

    if(languageFilter !== "" && languageFilter !== undefined){     
      let countriesByLanguage = countriesToShow.filter((country: { languages: ILanguages[]; }) => country.languages.some((language: { iso639_1: string; }) => language.iso639_1 === languageFilter));
      countriesToShow = countriesByLanguage;
    }

    setCountriesFiltered(countriesToShow);
    saveLastSeach();
    setIsLoading(false);    
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

  
  const saveLastSeach = () => {
    let lastSearch : ISearch = {
      name: nameFilter,
      region: regionFilter,
      language: languageFilter
    }
    const  searchHistory : ISearch[] = ls.get("searchHistory", []);
    searchHistory.push(lastSearch);
    ls.set("searchHistory", searchHistory);
  }
  
  const renderCountryDetail = (props:any) => {
    
    const countryName : string = props.match.params.name;
      
    const findCountry : ICountry | undefined = countries?.find((country) => country.name === countryName);
       
    return <CountryDetail country={findCountry} />;
  };


  return (
    <>
    <main className="App">
     
      <Header handleFilters={handleFilters}/>
      
      <Route exact path ="/">
      <CountriesList countries = {countriesFiltered} setFavs={setFavs} isLoading={isLoading}/>
      </Route>
      <Route path="/countries/:name" render= 
      {renderCountryDetail}>
      </Route>
      <Route path="/favcountries">
      <FavCountries favs={favs} setFavs={setFavs} />
      </Route>
    </main>
    <Footer/>
</>
  );
}

export default App;
