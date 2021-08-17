import React from 'react'
import CountriesCard from '../Countries/card/CountriesCard';
import './_favCountries.scss';
import { Link } from 'react-router-dom';

export default function FavCountries(props: any) {

	let countriesList = props.countries?.map((country:any) =>{		
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
