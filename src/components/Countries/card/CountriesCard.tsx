import React from 'react';
import './_countriesCard.scss';

export default function CountriesCard() {

	return (
	<div className="card">
		<img src="https://restcountries.eu/data/afg.svg" alt="Bandera del país" className="card__img" />
		<ul className="card__content">
			<li className="card__content-info">Nombre</li>
			<li className="card__content-info">Capital</li>
			<li className="card__content-info">Idioma</li>
			<li className="card__content-info">Región</li>
		</ul>
		<div className="material-icons">star_outline</div>
	</div>
		

	)
}
