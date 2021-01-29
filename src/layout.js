import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import injectContext from "./store/appContext";
import 'semantic-ui-css/semantic.min.css'
import Home from './views/home';


export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter >
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default injectContext(Layout);