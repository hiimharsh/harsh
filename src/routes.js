import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import About from './components/photography/about'
import Photography from './components/photography/photography'

export default class Routes extends React.Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route exact path="/harsh" component={App} />
					<Route exact path="/harsh/photography" component={Photography} />
					<Route exact path="/harsh/photography/about" component={About} />
					<Route path="*">
						<Redirect to="/harsh" />
					</Route>
				</Switch>
			</Router>
		)
	}
}
