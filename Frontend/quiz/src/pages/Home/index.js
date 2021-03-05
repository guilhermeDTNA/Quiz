import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';

//Componente que exibe a tela inicial
class Home extends Component {

  render() {

    return (

      <>

      <div className="homeContainer">
      <p>Olá! Bem-vindo(a) ao Quiz!</p>

      <p>Clique no botão abaixo para começar, nós lhe desejamos uma boa sorte.</p>

       <Link to="/questions" className="startButton"><button className="startButton">Iniciar Quiz</button></Link> 

      </div>

      </>
      );
    }

  }

export default Home;
