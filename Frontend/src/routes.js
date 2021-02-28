import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {Home} from './screens/Home';
import {Question1} from './screens/Question1';
import {Question2} from './screens/Question2';
import {Question3} from './screens/Question3';
import {Question4} from './screens/Question4';
import {Question5} from './screens/Question5';


//import Error from './src/screens/error/index.js';

export default class Routes extends Component {
	render(){
		return(

			<BrowserRouter>

			<Route path="/" component = {<p>Header</p>} />

			<Switch>

			<Route exact path="/" component={Home} />

			<Route exact path="/question1" component={Question1} />
			<Route exact path="/question2" component={Question2} />
			<Route exact path="/question3" component={Question3} />
			<Route exact path="/question4" component={Question4} />
			<Route exact path="/question5" component={Question5} />

			

			</Switch>
			</BrowserRouter>

			);

	}
}