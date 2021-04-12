import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/store';
import Header from './components/Header/Header';
import Router from './components/Router.jsx';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<ConnectedRouter history={history}>
				<div>
					<Header />
					<Router />
					<Footer />
				</div>
			</ConnectedRouter>
		</div>
	);
}

export default App;
