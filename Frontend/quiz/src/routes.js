import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/';
import Mistake from './pages/Mistake/';
import PageHeader from './PageHeader/';

import Question1 from './pages/questions/Question1';

export default class Routes extends Component {

	render(){
		return(
			<BrowserRouter>

			<Route path="/" component = {PageHeader} />

			<Switch>

			<Route exact path="/" component={Home} />
			<Route exact path="/question1" component={Question1} />

			<Route path="*" component = {Mistake} />

			</Switch>

			</BrowserRouter>


		);
	}

}