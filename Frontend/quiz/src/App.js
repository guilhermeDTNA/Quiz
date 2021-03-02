import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    var myHeaders = new Headers();

    fetch("http://localhost:8080/Quiz/questions/list")
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
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
          {item.question} {item.answer}
          </li>
          ))}
          </ul>
          

          );
      }

    }
  }
  export default App;
