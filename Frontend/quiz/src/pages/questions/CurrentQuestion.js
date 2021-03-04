import React, {Component} from 'react';

import Questions from './Questions';

export default class CurrentQuestion extends Component{
	constructor(props){
		super(props);

		this.state={
			idQuestion: props.idQuestion,
			answerQuestion: props.answer
		}

		this.verifyAnswer = this.verifyAnswer.bind(this);
	}


	verifyAnswer(answer){

		if(answer===this.state.answerQuestion){
			this.props.increaseQuestion();
		} else{
			console.log("Wrong: "+this.state.answerQuestion);
		}
	}


	render(){

		this.state.idQuestion = this.props.idQuestion;
		this.state.answerQuestion = this.props.answer;


		let id = this.state.idQuestion;

		switch(id){
			case 1:
			return(
				<div>
				<p>Question {this.props.number}</p>

				<hr/>

				<h2>{this.props.question} </h2>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<h2>Alternative 2</h2>
				<h2>Alternative 3</h2>
				<h2>Alternative 4</h2>

				<h2>{this.props.idQuestion}</h2>
				<button onClick={this.props.increaseQuestion}>Click here</button>

				</div>
				);

			break;
			
			case 2:
			return(
				<div>
				<p>Question {this.props.number}</p>

				<hr/>

				<h2>{this.props.question} </h2>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<h2>Alternative 5</h2>
				<h2>Alternative 6</h2>
				<h2>Alternative 7</h2>

				<button onClick={this.props.increaseQuestion}>Click here</button>

				<h2>{this.props.idQuestion}</h2>
				</div>
				);
			break;

			case 3:
			return(
				<div>
				<p>Question {this.props.number}</p>

				<hr/>

				<h2>{this.props.question} </h2>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<h2>Alternative 8</h2>
				<h2>Alternative 9</h2>
				<h2>Alternative 10</h2>

				<h2>{this.props.idQuestion}</h2>
				<button onClick={this.props.increaseQuestion}>Click here</button>

				</div>
				);
			break;

			case 4:
			return(
				<div>
				<p>Question {this.props.number}</p>

				<hr/>

				<h2>{this.props.question} </h2>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<h2>Alternative 11</h2>
				<h2>Alternative 12</h2>
				<h2>Alternative 13</h2>

				<h2>{this.props.idQuestion}</h2>
				<button onClick={this.props.increaseQuestion}>Click here</button>

				</div>
				);
			break;

			case 5:
			return(
				<div>
				<p>Question {this.props.number}</p>

				<hr/>

				<h2>{this.props.question} </h2>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>

				<h2>Alternative 14</h2>
				<h2>Alternative 15</h2>
				<h2>Alternative 16</h2>

				<h2>{this.props.idQuestion}</h2>
				<button onClick={this.props.increaseQuestion}>Click here</button>

				</div>
				);
			break;

			default:
				return(<div><p>...</p></div>);

		}


		
	}
}