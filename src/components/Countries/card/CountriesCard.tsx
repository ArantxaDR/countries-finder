import React from 'react';
import './_countriesCard.scss';



export default function CountriesCard(props:any) {
	console.log(props);
	return (
	<div className="card">
		<img src={props.country.flag} alt="Bandera del país" className="card__img" />
		<p className="card__content">{props.country.name}</p>
		<i className="material-icons">star_outline</i>
	</div>
	)
}
