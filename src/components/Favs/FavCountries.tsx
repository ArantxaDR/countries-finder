import React from 'react'
import { Link } from 'react-router-dom';
import { ICountry } from '../../common/interfaces/ICountry';
import CountriesCard from '../Countries/Card/CountriesCard';
import './_favCountries.scss';


export default function FavCountries(props:any) {
	
	const favs : ICountry[] = props.favs;
	
	let countriesList = favs.map((country:ICountry) =>{		
		return <CountriesCard key={country.alpha2Code} country={country} setFavs={props.setFavs} />
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
