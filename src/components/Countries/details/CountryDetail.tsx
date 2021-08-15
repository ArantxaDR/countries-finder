
import React from 'react';
import { Link } from "react-router-dom";
import './_countryDetail.scss';

export default function CountryDetail(props:any) {
	return (
		<>
        <Link to="/" className="home_link" title="Home l">
          <button className="home">Home<i className="material-icons" >home</i></button>
        </Link>
        <div className="card__detail">
			<div className="card__detail-container">
				<img 
				className="card__detail-img" 
				src={props.country.flag} 
				alt={`${props.country.name} flag`} 
				title={`${props.country.name} flag`}
				/>
			<h2 className="card_title">{props.country.name}</h2>
            <ul className="card_detail__list">
				<li>{`Capital: ${props.country.capital}`}</li>
                <li>{`Region: ${props.country.region}`}</li>
                <li>{`Subregion: ${props.country.subregion}`}</li>
                <li>{`Population: ${props.country.population}`}</li>
				<li>{`Area: ${props.country.area}`}</li>
              </ul>
            </div>
        </div>
      </>
	)
}
