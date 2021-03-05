import React from 'react';

import loadImage from '../img/loading.gif';
import './index.css';

export default function Loading(){


	return(
		<div className="containerLoading">
		<img src={loadImage} className="imgLoading" />
		<p className="textLoading">Loading...</p>
		</div>
	);
}