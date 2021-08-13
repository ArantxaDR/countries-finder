import axios, { AxiosResponse } from 'axios';
import {Country} from '../interfaces/Country';

class CountriesService {
    
    public async getAllCountries(): Promise<Country[]>{
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/all`);
        let countries: [Country] = result.data;
        return countries;    
    }

    public async getCountriesByName(countryName : string): Promise<Country[]>{
        let result: AxiosResponse = await axios.get('https://restcountries.eu/rest/v2/name/' + countryName);
        let countries: [Country] = result.data;
        return countries;    
    }
}
export const countriesService = new CountriesService();