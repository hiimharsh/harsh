import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Photography from './containers/photography'

export default class Routes extends React.Component {
	render () {
		return (
			<Router>
				<div className="main">
					<Switch>
						<Route exact path="/harsh" component={App} />
						{/* <Route exact path="/about" component={About} /> */}
						<Route exact path="/harsh/photographs" component={Photography} />
						<Route path="*">
							<Redirect to="/harsh" />
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}
