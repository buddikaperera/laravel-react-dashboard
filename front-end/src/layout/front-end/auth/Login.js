import React from 'react';
import NavBar from '../NavBar';

const Login = () => {
	return (
		<div>
			<NavBar />
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-header">
								<h4>Login</h4>
							</div>
							<div className="card-body">
								<form>
									<div className="form-grpup mb-3">
										<label className="mb-2">E-mail</label>
										<input
											name="email"
											className="form-control"
											value=""
										/>
									</div>

									<div className="form-grpup mb-3">
										<label className="mb-2">Password</label>
										<input
											name="password"
											className="form-control"
											value=""
										/>
									</div>

									<div className="form-grpup mb-3">
										<button
											type="submit"
											className="btn btn-primary"
										>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
