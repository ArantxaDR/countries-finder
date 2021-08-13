import React from 'react';
import './_countriesCard.scss';

export default function CountriesCard() {

	return (
	<div className="card">
		<img src="https://restcountries.eu/data/afg.svg" alt="Bandera del país" className="card__img" />
		<p className="card__content">Nombre</p>
		<div className="material-icons">star_outline</div>
	</div>
		

	)
}
