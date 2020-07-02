import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header'
import App from './App'

export default class Routes extends React.Component {
	render () {
		return (
			<Router>
				<div className="main">
					<Header title={'Hi Im Harsh'} />
					<Switch>
						<Route exact path="/harsh" component={App} />
						{/* <Route exact path="/about" component={About} /> */}
						<Route path="*">
							<Redirect to="/harsh" />
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}
