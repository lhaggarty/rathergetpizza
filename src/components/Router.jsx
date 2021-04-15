import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from '../pages/Contact';
import Listen from '../pages/Listen';
import Archive from '../pages/Archive';
import Landing from '../pages/Landing';

const Router = () => (
	<Switch>
		<Route path="/contact">
			<Contact />
		</Route>
		<Route path="/archive" exact>
			<Archive />
		</Route>
		<Route path="/listen">
			<Listen />
		</Route>
		<Route path="/landing">
			<Redirect to="/" />
		</Route>
		<Route exact path="/">
			<Landing />
		</Route>
	</Switch>
);

export default Router;
