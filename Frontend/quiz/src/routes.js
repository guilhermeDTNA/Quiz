import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Importa todos os componentes que serão exibidos
import Home from './pages/Home/';
import Mistake from './pages/Mistake/';
import PageHeader from './PageHeader/';
import Questions from './pages/questions/Questions';

//Componente que define quais as rotas e seus respectivos componentes a aplicação possui
export default class Routes extends Component {

	render(){
		//O que está fora de Switch será exibido em todas as páginas, no caso, o cabeçalho
		return(
			<BrowserRouter>

			<Route path="/" component = {PageHeader} />

			<Switch>

			<Route exact path="/" component={Home} />
			<Route exact path="/questions" component={Questions} />
			<Route path="*" component = {Mistake} />

			</Switch>

			</BrowserRouter>
		);
	}

}