import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export class Home extends Component{
	render(){
		return(
			<>
				<Link to="/">Start Quiz</Link> <br />
			</>
		);
	}
	
}