import React, {Component} from 'react';

export default class Questions extends Component{

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],

			isWrong: false,
			madeQuestions: [],
            currentQuestion: 1
		};

        this.selectQuestion = this.selectQuestion.bind(this);
        this.showItems = this.showItems.bind(this);
    }

    componentDidMount() {

    //var myHeaders = new Headers();

    fetch("http://localhost:9090/Quiz/questions/list")
    .then(res => res.json())
    .then(res => {
    	this.setState({
    		isLoaded: true,
    		items: res
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
        }
        )
    .then( () => this.selectQuestion())
    .then(() => this.showItems())

    
} 

selectQuestion(){

    while (this.state.madeQuestions.length<5){
        let qSelected = Math.floor(Math.random() * (5 - 0));

        if(this.state.madeQuestions.indexOf(qSelected) === -1){
            this.state.madeQuestions.push(qSelected);
        }
    } 

}

showItems(){
    for (var i = 0; i < this.state.madeQuestions.length; i++) {
        console.log("Position "+i+" "+this.state.madeQuestions[i]);
    }
}


render(){

	const { error, isLoaded, items, currentQuestion, isWrong } = this.state;
    let currentPosition = this.state.madeQuestions[currentQuestion-1];
    console.log(parseInt(this.state.madeQuestions[4]));

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
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
        
        return(

            <>

            <p>Question {currentQuestion}</p>

            


            </>

            );
    }
}
}