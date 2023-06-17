import React from 'react';
import NavBar from '../NavBar';

const Register = () => {
	return (
		<div>
			<NavBar />
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-header">
								<h4>Register</h4>
							</div>
							<div className="card-body">
								<form>
									<div className="form-group mb-3">
										<label className="mb-2">
											Full Name
										</label>
										<input
											className="form-control"
											name="name"
											value=""
										/>
									</div>

									<div className="form-group mb-3">
										<label className="mb-2"> E-mail</label>
										<input
											className="form-control"
											name="email"
											value=""
										/>
									</div>

									<div className="form-group mb-3">
										<label className="mb-2">Password</label>
										<input
											className="form-control"
											name="passsword"
											value=""
										/>
									</div>

									<div className="form-group mb-3">
										<label className="mb-2">
											Confirm Password
										</label>
										<input
											className="form-control"
											name="confirm_passsword"
											value=""
										/>
									</div>

									<div className="form-group mb-3">
										<button
											className="btn btn-primary"
											type="submit"
										>
											Register
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

export default Register;
