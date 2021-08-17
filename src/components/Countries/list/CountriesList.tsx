import React from 'react'
import './_countriesList.scss';
import CountriesCard from '../card/CountriesCard'
import { Link } from 'react-router-dom';
import { ICountry } from '../../../common/interfaces/ICountry';


export default function CountriesList(props:any) {

	const countries : ICountry[] = props.countries;

	let countriesList  = countries?.map((country:ICountry) =>{		
		return <CountriesCard key={country.alpha2Code} country={country} />
	})

	return (
		<>
		<Link to="/favcountries"><h3 className="fav__link">See favorites countries</h3></Link>
		<section className="cards">
			{countriesList}
		</section>
		</>
	)
}


  