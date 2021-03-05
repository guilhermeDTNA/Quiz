import React, {Component} from 'react';

import CurrentQuestion from './CurrentQuestion';
import Loading from '../Loading';

import OverlayFinish from './OverlayFinish';
import OverlayLose from './OverlayLose';

import './styles.css';

export default class Questions extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],

            madeQuestions: [],
            currentId: '',

            currentQuestion: 1,
            question: '',
            answer: '',
            idQuestion: '',

            finished: false,
            lose: false,

            hasError: false
        };

        this.selectQuestion = this.selectQuestion.bind(this);
        this.showItems = this.showItems.bind(this);
        this.increaseQuestion = this.increaseQuestion.bind(this);
        this.setCurrentId = this.setCurrentId.bind(this);
        this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
        this.loseQuiz = this.loseQuiz.bind(this);
    }

    componentDidCatch(error, info) {
    // Mostra uma UI alternativa
    this.setState({ hasError: true });
    // Você também pode registrar o erro em um serviço de relatório de erros
    console.log("Erro: "+error);
    console.log("Informations: "+info);
}

componentDidMount() {

    fetch("http://localhost:8080/Quiz/questions/list")
    .then(res => res.json())
    .then(res => {
        this.setState({
            isLoaded: true,
            items: res,
        });
    },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })

    .then( () => this.selectQuestion())

}


selectQuestion(){

    let state = this.state;


    while (state.madeQuestions.length<5){
        let qSelected = Math.floor(Math.random() * (5 - 0));

        if(state.madeQuestions.indexOf(qSelected) === -1){
            state.madeQuestions.push(qSelected);
        }
    }
    state.question = state.items[state.madeQuestions[0]].question;
    state.answer = state.items[state.madeQuestions[0]].answer;
    state.idQuestion = state.items[state.madeQuestions[0]].id;

    this.setState(state); 

}

showItems(){
    for (var i = 0; i < this.state.madeQuestions.length; i++) {
        console.log("Position "+i+" "+this.state.madeQuestions[i]);
    }
}

setCurrentId(){
    let state = this.state;

    /*CurrentID armazena qual o ID da questão de acordo com o número da questão, se estiver na questão
    1, o currentID armazenará o ID presente na posição 0 do madeQuestions
    */
    state.currentId = state.madeQuestions[state.currentQuestion-1];
    this.setState(state);
}

setCurrentQuestion(){
    let state = this.state;

    state.currentQuestion++;
    this.setState(state);
}

increaseQuestion(){

    let state = this.state;

    if(state.currentQuestion === 5){
        state.finished = true;
        state.currentQuestion=0;

    }

    this.setCurrentQuestion();
    this.setCurrentId();


    state.question = state.items[state.currentId].question;
    state.answer = state.items[state.currentId].answer;
    state.idQuestion = state.items[state.currentId].id;

    this.setState(state);
}

loseQuiz(){
    let state = this.state;
    state.lose = true;
    this.setState(state);
}


render(){

    if (this.state.hasError) {
      // Você pode renderizar qualquer alternativa de UI
      return <h1>Something went wrong.</h1>;
  }

  let state = this.state;


  if (state.error) {
      return <div>Error: {state.error.message}</div>;
  } else if (!state.isLoaded) {
      return <div><Loading /></div>;
  } else {


      if(state.finished){
          return( <div><OverlayFinish /></div> ); 
      } else if(state.lose){
          return( <div><OverlayLose /></div> );
      } 

      else{

          return(
              <>
              <CurrentQuestion loseQuiz={this.loseQuiz.bind(this)} increaseQuestion={this.increaseQuestion.bind(this)} number={this.state.currentQuestion} question={this.state.question} answer={this.state.answer} idQuestion={this.state.idQuestion} />
              </>

              );
          }
      }
  }
}