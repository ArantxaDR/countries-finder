import React, { useEffect, useState } from 'react';
import './_countriesCard.scss';
import { Link } from "react-router-dom";
import ls from '../../../common/services/LocalStorageService';

export default function CountriesCard(props:any) {
	const [favoritIconColor, setFavoritIconColor] = useState<string>("black");
	
	
	useEffect(() => {
		let  favoritCountries : any[] = ls.get("favoritCountries", []);
		const favoritCountry = favoritCountries.filter(favoritCountry  => favoritCountry.alpha2Code === props.country.alpha2Code);	
		if (favoritCountry.length > 0)
		{
			setFavoritIconColor("yellow");			
		}			
	  }, []);

	
	const favoritClickHandler = (ev:any) => {
		ev.preventDefault();
		let  favoritCountries : any[] = ls.get("favoritCountries", []);
	
		 let favoritCountry : any[] = [];
		 
		 if (favoritCountries.length > 0)
		 {
			favoritCountry = favoritCountries.filter(favoritCountry  => favoritCountry.alpha2Code === props.country.alpha2Code);			
		 }
		
		if(favoritCountry === undefined || favoritCountry.length === 0){			
			addCountryToFavorits(favoritCountries);
		}
		else{
			removeCountryFromFavorits(favoritCountries);			
		}

	}

	const addCountryToFavorits = (favoritCountries : any[]) => {			
		favoritCountries.push(props.country);		
		ls.set("favoritCountries", favoritCountries);
		setFavoritIconColor("yellow");
	}

	const removeCountryFromFavorits = (favoritCountries:any[]) => {		
		const newFavoritCountries  = favoritCountries.filter(favoritCountry  => favoritCountry.alpha2Code !== props.country.alpha2Code);
		ls.set("favoritCountries", newFavoritCountries);
		setFavoritIconColor("black");
	}

	
	return (
	<div className="card">
		<img src={props.country.flag} 
		alt={`${props.country.name} flag`} 
		title={`${props.country.name} flag`} 
		className="card__img"
		/>
		<p className="card__content">{props.country.name}</p>
		<div className="card__info">
			<button className="card__info-btn" onClick={favoritClickHandler}><i className="material-icons" style={{color: favoritIconColor}} >star</i></button>			
			<Link to={`/countries/${props.country.name}`} className="card__info-link">View More</Link>
		</div>
	</div>
	)
}
