import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import injectContext, { Context } from "./store/appContext";
import 'semantic-ui-css/semantic.min.css'
import Home from './views/home';
import Subscribers from './views/subscribers';
import Posting from './views/posting';
import Nav from './components/nav';
import PostForm from './components/postingComponents/postForm';
import EditPost from './components/postingComponents/editPost';

export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter >
			<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/subscribers" component={Subscribers} />
					<Route exact path="/posting" component={Posting} />
					<Route exact path="/postForm" component={PostForm} />
					<Route exact path="/editPost" component={EditPost} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default injectContext(Layout);