import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/frontend/Home';

import MainLayout from './layout/admin/MainLayout';
import Register from './layout/front-end/auth/Register';
import Login from './layout/front-end/auth/Login';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />

					<Route path="/login" component={Login} />

					<Route path="/register" component={Register} />
					<Route
						path="/admin"
						name="Admin"
						render={(props) => <MainLayout {...props} />}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
