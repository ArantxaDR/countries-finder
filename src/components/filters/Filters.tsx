import React from 'react';
import './_filters.scss';

export default function Filters() {
	return (
		<section className="wrapper">
			<form className="form">
				<label htmlFor="name" className="form__label">Country name</label>
				<input type="text" className="form__input" id="name" aria-placeholder="Find country by name" name="name"/>

				<label htmlFor="region" className="form__label">Region</label>
				<select name="region" id="region" className="form__input">
					<option value="All">All</option>
          			<option value="Africa">Africa</option>
          			<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>

				<label htmlFor="language" className="form__label">Language</label>
				<input type="text" className="form__input" id="language" aria-placeholder="E.g japanese" name="language"/>

			</form>
			
		</section>
	)
}
