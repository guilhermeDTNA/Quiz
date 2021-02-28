import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Error extends Component{
	render(){
		return(
			<div>
			<h2>Ops! Page not found!...</h2>
			<h3>You're searching for:</h3>
				<Link to="/">Home</Link><br />
			</div>
		);
	}
	
}