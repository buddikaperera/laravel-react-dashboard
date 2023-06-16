import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../../assests/css/styles.css';
import '../../assests/js/scripts';
import Footer from './Footer';
import NavBar from './NavBar';
import SideBar from './SideBar';
import routes from '../../routes/routes';


const MainLayout = () => {
	return (
		<div className="sb-nav-fixed">
			<NavBar />

			<div id="layoutSidenav">
				<div id="layoutSidenav_nav">
					ssss
					<SideBar />
				</div>
				<div id="layoutSidenav_content">
					<main>
						<Switch>
							{routes.map((route, idx) => {
								return (
									route.component && (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={(props) => (
												<route.component {...props} />
											)}
										/>
									)
								);
							})}
							<Redirect from="admin" to="/admin/dashboard" />
						</Switch>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
