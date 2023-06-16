import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/frontend/Home';

import MainLayout from './layout/admin/MainLayout';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
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
