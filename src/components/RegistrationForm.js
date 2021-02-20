import React, { useState } from 'react';
import SHOWTIME from '../img/SHOWTIME.png';

const RegistrationForm = ({ handleAuthentication }) => {
	
	const [userName, setUserName] = useState("");
	const [passWord, setPassWord] = useState("");
	
	const handleChange = (event) => {
		if (event.target.id === "username") {
			setUserName(event.target.value);
		}
		if (event.target.id === "pass_word") {
			setPassWord(event.target.value);
		}
	}
	
	const handleRegistration = (event) => {
		if (userName && 
			userName.trim() && 
			userName.trim().toLowerCase() === "admin" &&
			passWord &&
			passWord.trim() &&
			passWord.trim() === "admin"
		) {
			handleAuthentication(true);
		} else {
			alert("Please enter correct credentials!");
		}
	}
	
	const handleResetForm = (event) => {
		if (userName || passWord) {
			setUserName("");
			setPassWord("");
		}
	}
	
	return (
		<div className="container-fluid registration-form-container">
			<div className="row">
				<div className="col-12">
					<div className="registration-form">
						<img className="d-block login-form-logo img-fluid" src={SHOWTIME} alt="logo" />
						<div className="row mb-3">
							<div className="col-12 col-sm-3">
								<label htmlFor="username" className="form-label pt-2 pl-3 float-left">User name</label>
							</div>
							<div className="col-11 col-sm-8">
								<input 
									type="text" 
									className="form-control ml-3" 
									id="username" 
									placeholder="User name" 
									value={userName}
									onChange={(event) => handleChange(event)} 
									required 
								/>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-12 col-sm-3">
								<label htmlFor="pass_word" className="form-label pt-2 pl-3 float-left">Password</label>
							</div>
							<div className="col-11 col-sm-8">
								<input 
									type="password" 
									className="form-control ml-3" 
									id="pass_word" 
									placeholder="Password"
									value={passWord}
									onChange={(event) => handleChange(event)}									
									required 
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-sm-3"></div>
							<div className="col-12 col-sm-8 mt-4 mb-4">
								<button 
									className="register-btn"
									onClick={(event) => handleRegistration(event)}
								>
									Log in
								</button>
								<button 
									className="cancel-btn"
									onClick={(event) => handleResetForm(event)}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegistrationForm;