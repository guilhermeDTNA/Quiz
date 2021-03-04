import React, {Component} from 'react';

export default class CurrentQuestion extends Component{
	constructor(props){
		super(props);

		this.state={
		}
	}

	render(){
		return(
			<div>
			<p>Question {this.props.number}</p>
			<h2>{this.props.question} </h2>
			<h2>{this.props.answer}</h2>

			<hr/>
			</div>
			);
	}
}