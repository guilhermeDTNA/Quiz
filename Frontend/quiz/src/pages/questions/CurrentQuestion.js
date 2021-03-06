import React, {Component} from 'react';

import Questions from './Questions';
import './styles.css';

/*Componente que recebe o id e exibe cada questão, verificando a resposta*/
export default class CurrentQuestion extends Component{
	constructor(props){
		super(props);

		//Armazena o id da questão passada e sua resposta
		this.state={
			idQuestion: props.idQuestion,
			answerQuestion: props.answer
		}
		//Autoriza o método a manipular o state
		this.verifyAnswer = this.verifyAnswer.bind(this);
	}

	//Verifica se a resposta recebida condiz com a resposta correta
	verifyAnswer(answer){
		//Chama os métodos do componente Questions
		if(answer!==this.state.answerQuestion){
			this.props.loseQuiz();
		} else{
			this.props.increaseQuestion();
		}
	}


	render(){
		//Seta os estados de acordo com o recebido
		this.state.idQuestion = this.props.idQuestion;
		this.state.answerQuestion = this.props.answer;

		let id = this.state.idQuestion;

		//Exibe as alternativas de acordo com o id da questão recebido
		switch(id){
			case 1:
			return(
				<div className="containerQuestion">
				<p className="questionNumber">Questão {this.props.number}</p>

				<hr/>

				<h2 className="askQuestion">{this.props.question} </h2>
				<div className="alternatives">
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<button onClick={() => this.verifyAnswer("A coleção Map considerará somente a primeira chave inserida em caso de duplicação de chaves. Na coleção Set, em caso de duplicação de objetos, o segundo deles inserido é o que será mantido, enquanto o primeiro é descartado.")}>A coleção Map considerará somente a primeira chave inserida em caso de duplicação de chaves. Na coleção Set, em caso de duplicação de objetos, o segundo deles inserido é o que será mantido, enquanto o primeiro é descartado.</button>
				<button onClick={() => this.verifyAnswer("A diferença está na data de lançamento das coleções, Sendo a coleção Set mais antiga que a coleção Map.")}>A diferença está na data de lançamento das coleções, Sendo a coleção Set mais antiga que a coleção Map.</button>
				<button onClick={() => this.verifyAnswer("NDA")}>NDA</button>
				</div>
				</div>
				);

			break;
			
			case 2:
			return(
				<div>
				<p className="questionNumber">Questão {this.props.number}</p>

				<hr/>

				<h2 className="askQuestion">{this.props.question} </h2>
				<div className="alternatives">
				<button onClick={() => this.verifyAnswer("Closure é um termo que representa a habilidade de se implementar o mesmo método de uma classe-pai de forma diferente nas classes-filhas.")}>Closure é um termo que representa a habilidade de se implementar o mesmo método de uma classe-pai de forma diferente nas classes-filhas.</button>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<button onClick={() => this.verifyAnswer("Closure é o nome dado a um dos 3 pilares da Programação Orientada a Objetos, sendo eles: Herança, Closure e Polimorfismo.")}>Closure é o nome dado a um dos 3 pilares da Programação Orientada a Objetos, sendo eles: Herança, Closure e Polimorfismo.</button>
				<button onClick={() => this.verifyAnswer("NDA")}>NDA</button>
				</div>
				</div>	
				);
			break;

			case 3:
			return(
				<div>
				<p className="questionNumber">Questão {this.props.number}</p>

				<hr/>

				<h2 className="askQuestion">{this.props.question} </h2>
				<div className="alternatives">
				<button onClick={() => this.verifyAnswer("Pseudo-classes são representadas pelo caractere '::' e pseudo-elementos são definidos pelos caracteres ':'.")}>Pseudo-classes são representadas pelo caractere '::' e pseudo-elementos são definidos pelos caracteres ':'.</button>
				<button onClick={() => this.verifyAnswer("Pseudo-elementos permitem a manipulação de eventos enquanto que pseudo-classes servem para estilizar uma parte de um elemento, não permitindo a seleção de um elemento por seu estado.")}>Pseudo-elementos permitem a manipulação de eventos enquanto que pseudo-classes servem para estilizar uma parte de um elemento, não permitindo a seleção de um elemento por seu estado.</button>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<button onClick={() => this.verifyAnswer("NDA")}>NDA</button>
				</div>

				</div>
				);
			break;

			case 4:
			return(
				<div>
				<p>Question {this.props.number}</p>

				<hr/>

				<h2 className="askQuestion">{this.props.question} </h2>
				<div className="alternatives">
				<button onClick={() => this.verifyAnswer("As tags: <table>, <head>, <thead>, <body> e <tbody>.")}>As tags: &lt;table&gt;, &lt;head&gt;, &lt;thead&gt;, &lt;body&gt; e &lt;tbody&gt;.</button>
				<button onClick={() => this.verifyAnswer("As tags: <table>, <head>, <thead>, <body> e <tbody>.")}>As tags: &lt;table&gt;, &lt;td&gt; e &lt;title&gt;.</button>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<button onClick={() => this.verifyAnswer("NDA")}>NDA</button>
				</div>
				</div>
				);
			break;

			case 5:
			return(
				<div>
				<p className="questionNumber">Questão {this.props.number}</p>

				<hr/>

				<h2 className="askQuestion">{this.props.question} </h2>
				<div className="alternatives">
				<button onClick={() => this.verifyAnswer("O Grid trabalha com a distribuição dos elementos de maneira unidimensional, isto é, por colunas ou por linhas. Já com o Flexbox é possível ajustar os elementos por linhas e colunas simultaneamente.")}>O Grid trabalha com a distribuição dos elementos de maneira unidimensional, isto é, por colunas ou por linhas. Já com o Flexbox é possível ajustar os elementos por linhas e colunas simultaneamente.</button>
				<button onClick={() => this.verifyAnswer(this.props.answer)}>{this.props.answer}</button>
				<button onClick={() => this.verifyAnswer("O Grid se tornou obsoleto e já não é mais utilizado em projetos maiores, enquanto que o Flexbox é o mais recomendado e sofre atualizações constantes.")}>O Grid se tornou obsoleto e já não é mais utilizado em projetos maiores, enquanto que o Flexbox é o mais recomendado e sofre atualizações constantes.</button>
				<button onClick={() => this.verifyAnswer("NDA")}>NDA</button>
				</div>
				</div>
				);
			break;

			//Deve retornar alguma coisa senão dá erro
			default:
			return(<div></div>);

		}


		
	}
}