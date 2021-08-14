import React from 'react'
import Filters from '../filters/Filters'

export default function Header(props:any) {

	return (
		<header className="App__header">
       
       <h1 className="App__header-title">Countries finder</h1>
	   <Filters handleFilters={props.handleFilters}/> 
        
      </header>
	)
}
