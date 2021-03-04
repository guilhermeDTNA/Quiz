import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/';
import Mistake from './pages/Mistake/';
import PageHeader from './PageHeader/';

import Questions from './pages/questions/Questions';

export default class Routes extends Component {

	render(){
		return(
			<BrowserRouter>

			<Route path="/" component = {PageHeader} />

			<Switch>

			<Route exact path="/" component={Home} />
			<Route exact path="/question1" component={Questions} />

			<Route path="*" component = {Mistake} />

			</Switch>

			</BrowserRouter>


		);
	}

}