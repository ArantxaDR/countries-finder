import React, { useEffect, useState } from 'react';
import './_countriesCard.scss';
import { Link } from "react-router-dom";
import ls from '../../../common/services/LocalStorageService';
import { ICountry } from '../../../common/interfaces/ICountry';

export default function CountriesCard(props:any) {
	const [favoritIconColor, setFavoritIconColor] = useState<string>("black");
	
	const country : ICountry = props.country;
	
	useEffect(() => {
		let  favoritCountries : ICountry[] = ls.get("favoritCountries", []);
		const favoritCountry = favoritCountries.filter(favoritCountry  => favoritCountry.alpha2Code === country.alpha2Code);	
		if (favoritCountry.length > 0)
		{
			setFavoritIconColor("yellow");			
		}			
	  }, []);

	
	const favoritClickHandler = (ev:any) => {
		ev.preventDefault();
		let  favoritCountries : ICountry[] = ls.get("favoritCountries", []);
	
		 let favoritCountry : ICountry | undefined ;
		 
		 if (favoritCountries.length > 0)
		 {
			favoritCountry = favoritCountries.find(favoritCountry  => favoritCountry.alpha2Code === country.alpha2Code);			
		 }
		
		if(favoritCountry === undefined){			
			addCountryToFavorits(favoritCountries);
		}
		else{
			removeCountryFromFavorits(favoritCountries);			
		}

	}

	const addCountryToFavorits = (favoritCountries : ICountry[]) => {			
		favoritCountries.push(country);		
		ls.set("favoritCountries", favoritCountries);
		setFavoritIconColor("yellow");
	}

	const removeCountryFromFavorits = (favoritCountries : ICountry[]) => {		
		const newFavoritCountries : ICountry[]  = favoritCountries.filter(favoritCountry  => favoritCountry.alpha2Code !== country.alpha2Code);
		ls.set("favoritCountries", newFavoritCountries);
		setFavoritIconColor("black");
	}

	
	return (
	<div className="card">
		<img src={country.flag} 
		alt={`${country.name} flag`} 
		title={`${country.name} flag`} 
		className="card__img"
		/>
		<p className="card__content">{country.name}</p>
		<div className="card__info">
			<button className="card__info-btn" onClick={favoritClickHandler}><i className="material-icons" style={{color: favoritIconColor}} >star</i></button>			
			<Link to={`/countries/${country.name}`} className="card__info-link">View More</Link>
		</div>
	</div>
	)
}
