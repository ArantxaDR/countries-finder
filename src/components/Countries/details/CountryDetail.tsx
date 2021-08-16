
import React from 'react';
import { Link } from "react-router-dom";
import { WorldMap } from 'react-svg-worldmap';
import './_countryDetail.scss';

export default function CountryDetail (props:any) {
	
	if (props.country === undefined) {
		return <h1>Ups! Wrong path</h1>;
	}

	const country =props.country;
	
	const data =
	[
     { country: country.alpha2Code, value: country.population}
	]
	
	
	return (
		
	<section className="details__wrapper">
        <Link to="/" className="home_link" title="Home">
          <button className="home">Home <i className="material-icons" >home</i></button>
        </Link>
        <article className="detail__container">
			<img
			className="detail__img"
			src={country.flag} 
			alt={`${country.name} flag`} 
			title={`${country.name} flag`}
			/>
			
			<div className="country__details">
				<div className="country__details-text">
					<h2 className="country__details-text__title">{country.name}</h2>

					<h5 className="country__details-text__subtitle">Capital: <span>{country.capital}</span></h5> 
					<h5 className="country__details-text__subtitle">Region: <span>{country.region}</span></h5>
					<h5 className="country__details-text__subtitle">Sub Region: <span>{country.subregion}</span></h5>
					<h5 className="country__details-text__subtitle">Population: <span>{country.population}</span></h5>
					<h5 className="country__details-text__subtitle">Area: <span>{country.area}</span></h5>
				</div>
				<div className="country__details-text">
					<h5 className="country__details-text__subtitle">Currencies: <span>{country.currencies[0].name}</span></h5>
					<h5 className="country__details-text__subtitle">Language: <span>{country.languages[0].name}</span></h5>
				
				</div>
				
			</div>         
            <WorldMap color= "darkred" value-suffix="people" size="responsive" data={data}/>
        </article>
		
	</section>
	)
}
