import React from 'react'
import './_countriesList.scss';
import CountriesCard from '../card/CountriesCard'

export default function CountriesList(props:any) {

	let countriesList = props.countries?.map((country:any) =>{		
		return <CountriesCard key={country.alpha2Code} country={country} />
	})

	return (
		<section className="cards">
		{countriesList}
		</section>
	)
}


  