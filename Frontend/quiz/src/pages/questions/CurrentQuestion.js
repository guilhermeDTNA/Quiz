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

		if(answer!==this.state.answerQuestion){
			this.props.loseQuiz();
		} else{
			//console.log(answer);
			this.props.increaseQuestion();
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
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 2</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 3</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 4</button>

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
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 5</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 6</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 7</button>

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
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 8</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 9</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 10</button>

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
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 11</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 12</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 13</button>

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

				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 14</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 15</button>
				<button onClick={() => this.verifyAnswer("Teste alternativa")}>Alternative 16</button>

				</div>
				);
			break;

			default:
				return(<div><p>...</p></div>);

		}


		
	}
}