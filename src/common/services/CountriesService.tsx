import axios, { AxiosResponse } from 'axios';
//import {Country} from '../interfaces/Country';

class CountriesService {
    
    public async getAllCountries(): Promise<any>{        
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/all`);
        return result.data;    
    }

    public async getCountriesByName(countryName : string): Promise<any>{       
        let result: AxiosResponse = await axios.get('https://restcountries.eu/rest/v2/name/' + countryName);
        return result.data;    
    }
}
export const countriesService = new CountriesService();