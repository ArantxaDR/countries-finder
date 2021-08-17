import React, { useEffect , useState} from 'react'
import CountriesCard from '../Countries/card/CountriesCard';
import ls from '../../common/services/LocalStorageService';
import './_favCountries.scss';
import { Link } from 'react-router-dom';
import { ICountry } from '../../common/interfaces/ICountry';

export default function FavCountries() {
	const [favs, setFavs] = useState<ICountry[]>([]);
	
	useEffect(() => {
		const  favoritCountries : ICountry[] = ls.get("favoritCountries", []);
    setFavs(favoritCountries);			
		}, []);

	let countriesList = favs.map((country:ICountry) =>{		
		return <CountriesCard key={country.alpha2Code} country={country} />
	})

	return (
		<>
		<Link to="/" className="home_link" title="Home">
          <button className="home  fav">Home <i className="material-icons" >home</i></button>
        </Link>
		<section className="cards">
			{countriesList}
		</section>
		</>
	)
}
