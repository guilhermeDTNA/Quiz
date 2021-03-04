import React, {Component} from 'react';

import CurrentQuestion from './CurrentQuestion';
import OverlayScreen from './OverlayScreen';
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
    idQuestion: ''
};

this.selectQuestion = this.selectQuestion.bind(this);
this.showItems = this.showItems.bind(this);
this.increaseQuestion = this.increaseQuestion.bind(this);
this.setCurrentId = this.setCurrentId.bind(this);
this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
}

componentDidMount() {

    //var myHeaders = new Headers();

    fetch("http://localhost:9090/Quiz/questions/list")
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

    state.currentQuestion=0;

}

this.setCurrentQuestion();
this.setCurrentId();


state.question = state.items[state.currentId].question;
state.answer = state.items[state.currentId].answer;
state.idQuestion = state.items[state.currentId].id;
    //console.log(this.state.currentQuestion);

    this.setState(state);
}


render(){

    let state = this.state;


    //let currentPosition = this.state.madeQuestions[currentQuestion];
    //console.log(this.state.madeQuestions[4]);

    if (state.error) {
    return <div>Error: {state.error.message}</div>;
} else if (!state.isLoaded) {
    return <div>Loading...</div>;
} else {

      /*
              <ul>
        {items.map(item => (
          <li key={item.id}>
          {item.question} {item.answer}
          </li>
          ))}
        </ul>
        */
        if(state.currentQuestion === 0){
            return( <OverlayScreen /> ); 
        } else{
        
        return(

            <>



            <CurrentQuestion increaseQuestion={ this.increaseQuestion.bind(this) } number={this.state.currentQuestion} question={this.state.question} answer={this.state.answer} idQuestion={this.state.idQuestion} />
            
            </>

            );
        }
    }
    }
}