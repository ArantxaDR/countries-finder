import React from 'react';
import './_countriesCard.scss';
import { Link } from "react-router-dom";



export default function CountriesCard(props:any) {
	console.log(props);
	return (
	<div className="card">
		<img src={props.country.flag} alt={`${props.country.name} flag`} title={`${props.country.name} flag`} className="card__img" />
		<p className="card__content">{props.country.name}</p>
		<div className="card__info">
		<i className="material-icons">star_outline</i>
		<a href="">View More</a>
		</div>
	</div>
	)
}
