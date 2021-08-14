import React from 'react';
import './_filters.scss';

export default function Filters(props:any) {

	let refName = React.createRef<HTMLInputElement>();
	let refLanguage = React.createRef<HTMLInputElement>();
	let refRegion = React.createRef<HTMLSelectElement>();

	const handleSubmit = (ev:any) => {
		ev.preventDefault();
		
		props.handleFilters({ value: refName.current?.value, key: refName.current?.id });
		props.handleFilters({ value: refLanguage.current?.value, key: refLanguage.current?.id });
		props.handleFilters({ value: refRegion.current?.value, key: refRegion.current?.id });
	  };
	return (
		<section className="wrapper">
			<form className="form">
				<label htmlFor="name" className="form__label">Country name</label>
				<input type="text" className="form__input" id="name" aria-placeholder="Find country by name" name="name" ref={refName}/>

				<label htmlFor="region" className="form__label">Region</label>
				<select name="region" id="region" className="form__input" ref={refRegion}>
					<option value="All">All</option>
          			<option value="Africa">Africa</option>
          			<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>

				<label htmlFor="language" className="form__label">Language</label>
				<input type="text" className="form__input" id="language" aria-placeholder="E.g japanese" name="language" ref={refLanguage}/>

			</form>
			<button className="wrapper__btn" onClick={handleSubmit}>Search<i className="material-icons" >search</i></button>
		</section>
	)
}
