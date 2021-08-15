
import React from 'react';
import { Link } from "react-router-dom";
import './_countryDetail.scss';

export default function CountryDetail (props:any) {

	const country =props.country;
	
	console.log(country);
	return (
		
		<>
        <Link to="/" className="home_link" title="Home l">
          <button className="home">Home<i className="material-icons" >home</i></button>
        </Link>
        <div className="card__detail">
			<div className="card__detail-container">
				<img 
				className="card__detail-img" 
				src={country.flag} 
				alt={`${country.name} flag`} 
				title={`${country.name} flag`}
				/>
			<h2 className="card_title">{country.name}</h2>
            <ul className="card_detail__list">
				<li>{`Capital: ${country.capital}`}</li>
                <li>{`Region: ${country.region}`}</li>
                <li>{`Subregion: ${country.subregion}`}</li>
                <li>{`Population: ${country.population}`}</li>
				<li>{`Area: ${country.area}`}</li>
				<li>{`Currencies: ${country.currencies[0].name}`}</li>
				<li>{`Borders: ${country.borders}`}</li>
              </ul>
            </div>
        </div>
      </>
	)
}
