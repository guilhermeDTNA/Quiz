import React, {Component} from 'react';

import CurrentQuestion from './CurrentQuestion';
import Loading from '../Loading';

import OverlayFinish from './OverlayFinish';
import OverlayLose from './OverlayLose';

import './styles.css';

//Componente que recebe todas as questões e exibe o overlay apropriado, de acordo com o resultado obtido em CurrentQuestion
export default class Questions extends Component{

  constructor(props) {
    super(props);
    this.state = {
      //States para verificar se foi carregado
      error: null,
      isLoaded: false,
      //Os itens armazenam os elementos resgatados do JSON, e o madeQuestions armazena as questões já feitas
      items: [],
      madeQuestions: [],
      //Armazenam os os dados da questão e a questão atuais
      currentId: '',
      currentQuestion: 1,
      question: '',
      answer: '',
      idQuestion: '',
      //Armazena se respondeu corretamente ou errou alguma
      finished: false,
      lose: false,
    };

    this.selectQuestion = this.selectQuestion.bind(this);
    this.increaseQuestion = this.increaseQuestion.bind(this);
    this.setCurrentId = this.setCurrentId.bind(this);
    this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
    this.loseQuiz = this.loseQuiz.bind(this);
  }

  //Logo que o componente carrega...
  componentDidMount() {

    //Caso queira executar a aplicação por outro dispositivo, basta trocar 'localhost' pelo IP do dispositivo na rede
    fetch("localhost:8080/Quiz/questions/list")
    .then(res => res.json())
    .then(res => {
      this.setState({
        isLoaded: true,
        items: res,
      });
    },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
    //Seleciona a lista de questões logo ao carregar o componente
    .then(() => this.selectQuestion())
  }

  //Método que ordena e armazena as questões aleatoriamente ao carregar o componente
  selectQuestion(){

    let state = this.state;

    //Sorteia a ordem das questões e as armazena em madeQuestions,
    while (state.madeQuestions.length<5){
      let qSelected = Math.floor(Math.random() * (5 - 0));
      //Se o id selecionado não existir no array de questões feitas ele será inserido, até que o array tenha 5 questões
      if(state.madeQuestions.indexOf(qSelected) === -1){
        state.madeQuestions.push(qSelected);
      }
    }
    //Seta os dados da questão atual no state
    state.question = state.items[state.madeQuestions[0]].question;
    state.answer = state.items[state.madeQuestions[0]].answer;
    state.idQuestion = state.items[state.madeQuestions[0]].id;

    this.setState(state); 

  }
  //Altera o id atual de acordo com a questão
  setCurrentId(){
    let state = this.state;

    /*CurrentID armazena qual o ID da questão de acordo com o número da questão, se estiver na questão
    1, o currentID armazenará o ID presente na posição 0 do madeQuestions
    */
    state.currentId = state.madeQuestions[state.currentQuestion-1];
    this.setState(state);
  }
  //Altera o número da questão atual
  setCurrentQuestion(){
    let state = this.state;

    state.currentQuestion++;
    this.setState(state);
  }
  //Verifica se poderá fazer o incremento da questão
  increaseQuestion(){

    let state = this.state;

    //Se já tiver feito as 5 perguntas e o componente CurrentQuestion não relatou erro então o usuário venceu
    if(state.currentQuestion === 5){
      state.finished = true;
      state.currentQuestion=0;
    }

    //Caso ainda não atingiu 5, inicia-se o processo para passar para a próxima pergunta
    this.setCurrentQuestion();
    this.setCurrentId();

    state.question = state.items[state.currentId].question;
    state.answer = state.items[state.currentId].answer;
    state.idQuestion = state.items[state.currentId].id;

    this.setState(state);
  }

  //Método que consolidará a derrota do participante, este método é chamado pelo CurrentQuestion via prop
  loseQuiz(){
    let state = this.state;
    state.lose = true;
    this.setState(state);
  }


  render(){

    let state = this.state;

    //Exibe o erro (se houver) ao carregar o componente
    if (state.error) {
      return <div>Erro: {state.error.message}</div>;
    } else if (!state.isLoaded) {
      return <div><Loading /></div>;
    } else {

      //Exibe o overlay de derrota ou vitória no quiz
      if(state.finished){
        return( <div><OverlayFinish /></div> ); 
      } else if(state.lose){
        return( <div><OverlayLose /></div> );
      } 
      //Caso não dê erro e nem tenha acabado, envia as informações para o CurrentQuestions exibí-las
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