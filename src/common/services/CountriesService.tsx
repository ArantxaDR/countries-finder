import axios, { AxiosResponse } from 'axios';
import {ICountry} from '../interfaces/ICountry';

class CountriesService {
    
    public async getAllCountries(): Promise<ICountry[]>{        
        let result: AxiosResponse= await axios.get(`https://restcountries.eu/rest/v2/all`);
        let countries : ICountry[];
        countries = result.data.map((item : ICountry)=> {
            const country :ICountry = {
                name: item.name,
                alpha2Code: item.alpha2Code,
                flag: item.flag,
                population: item.population,
                capital: item.capital,
                region: item.region,
                subregion: item.subregion,
                area: item.area,
                currencies : item.currencies,
                languages: item.languages
            }
            return country;            
        })        
        //return result.data;    
        return countries;
    }

    public async getCountriesByName(countryName : string): Promise<ICountry[]>{       
        let result: AxiosResponse = await axios.get('https://restcountries.eu/rest/v2/name/' + countryName);
        let countries : ICountry[];
        countries = result.data.map((item : ICountry)=> {
            const country :ICountry = {
                name: item.name,
                alpha2Code: item.alpha2Code,
                flag: item.flag,
                population: item.population,
                capital: item.capital,
                region: item.region,
                subregion: item.subregion,
                area: item.area,
                currencies : item.currencies,
                languages: item.languages
            }
            return country;            
        })        
        //return result.data;    
        return countries;
    }
}
export const countriesService = new CountriesService();