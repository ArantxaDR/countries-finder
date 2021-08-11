  
import axios from "axios";

export default class CountriesData {
    async getAllCountries() {
        const allcountries = await axios.get('https://restcountries.eu/rest/v2/all');
		
        return allcountries;
    }
	
}