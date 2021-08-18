import React from 'react'
import logoLoading from '../../assets/lupa.svg';
import './_loading.scss';

export default function Loading() {
	return (
		<div className="loading__container">
      <img
        className="loading__container-image"
        src={logoLoading}
        alt="loading"
        title="loading"
      />
      <p className="loading__container-text">Loading...</p>
    </div>
	)
}
