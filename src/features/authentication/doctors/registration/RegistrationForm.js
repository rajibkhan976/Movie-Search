import React, { useState } from 'react';

const RegistrationForm = ({}) => {
	
	const [title, setTitle] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState({});
	const [gender, setGender] = useState("");
	const [specialization, setSpecialization] = useState("");
	
	const handleChange = (event) => {
		if (event.target.id === "title") {
			setTitle(event.target.value);
		}
		if (event.target.id === "first_name") {
			setFirstName(event.target.value);
		}
		if (event.target.id === "last_name") {
			setLastName(event.target.value);
		}
		if (event.target.id === "phone_number") {
			setPhoneNumber(event.target.value);
		}
		if (event.target.id === "address") {
			setAddress(event.target.value);
		}
		if (event.target.id === "dob") {
			setDateOfBirth(event.target.value);
		}
		if (event.target.id === "gender") {
			setGender(event.target.value);
		}
		if (event.target.id === "specialization") {
			setSpecialization(event.target.value);
		}
	}
	
	const handleRegistration = (event) => {
		var formData = new FormData();
		if (title) {
			formData.append('title', title);
		}
		if (firstName) {
			formData.append('first_name', firstName);
		}
		if (lastName) {
			formData.append('last_name', lastName);
		}
		if (phoneNumber) {
			formData.append('phone_number', phoneNumber);
		}
		if (address) {
			formData.append('address', address);
		}
		if (dateOfBirth) {
			formData.append('dob', dateOfBirth);
		}
		if (dateOfBirth) {
			formData.append('dob', dateOfBirth);
		}
		if (gender) {
			formData.append('gender', gender);
		}
		if (specialization) {
			formData.append('specialization', specialization);
		}
		alert("Registration successful");
	}
	
	const handleResetForm = (event) => {
		if (title || 
			firstName ||
			lastName ||
			phoneNumber ||
			address ||
			dateOfBirth ||
			gender ||
			specialization
		) {
			setTitle("");
			setFirstName("");
			setLastName("");
			setPhoneNumber("");
			setAddress("");
			setDateOfBirth(null);
			setGender("");
			setSpecialization("");
		}
	}
	
	return (
		<div className="registration-form-container">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="registration-form">
							<span className="d-inline-block form-header mt-3 mb-5 font-bolder">carelyo</span>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="title" className="form-label pt-2 pl-3 float-left">Title</label>
								</div>
								<div className="col-11 col-sm-8">
									<input 
										type="text" 
										className="form-control ml-3" 
										id="title" placeholder="Title" 
										value={title}
										onChange={(event) => handleChange(event)} 
										required 
									/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="first_name" className="form-label pt-2 pl-3 float-left">First name</label>
								</div>
								<div className="col-11 col-sm-8">
									<input 
										type="text" 
										className="form-control ml-3" 
										id="first_name" 
										placeholder="First name"
										value={firstName}
										onChange={(event) => handleChange(event)}									
										required 
									/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="last_name" className="form-label pt-2 pl-3 float-left">Last name</label>
								</div>
								<div className="col-11 col-sm-8">
									<input 
										type="text" 
										className="form-control ml-3" 
										id="last_name" 
										placeholder="Last name" 
										value={lastName}
										onChange={(event) => handleChange(event)}
										required 
									/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="phone_number" className="form-label pt-2 pl-3 float-left">Phone number</label>
								</div>
								<div className="col-11 col-sm-8">
									<input 
										type="text" 
										className="form-control ml-3" 
										id="phone_number" 
										placeholder="Phone number" 
										value={phoneNumber}
										onChange={(event) => handleChange(event)}
										required 
									/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="address" className="form-label pt-2 pl-3 float-left">Address</label>
								</div>
								<div className="col-11 col-sm-8">
									<input 
										type="text" 
										className="form-control ml-3" 
										id="address" 
										placeholder="Address"
										value={address}
										onChange={(event) => handleChange(event)}										
										required 
									/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="dob" className="form-label pt-2 pl-3 float-left">Date of birth</label>
								</div>
								<div className="col-11 col-sm-8">
									<input 
										type="date" 
										className="form-control ml-3" 
										id="dob" 
										placeholder="Date of birth"
										value={dateOfBirth}
										onChange={(event) => handleChange(event)}
										required 
									/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-12 col-sm-3">
									<label htmlFor="gender" className="form-label pt-2 pl-3 float-left">Gender</label>
								</div>
								<div className="col-11 col-sm-8">
									<select 
										id="gender" 
										className="form-select form-select-lg form-control ml-3" 
										value={gender}
										onChange={(event) => handleChange(event)}
										style={{"border": "2px solid black"}}
									>
									  <option value="Female">Female</option>
									  <option value="Male">Male</option>
									  <option value="Others">Others</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-3">
									<label htmlFor="specialization" className="form-label pt-2 pl-3 float-left">Specialization</label>
								</div>
								<div className="col-11 col-sm-8">
									<select 
										id="specialization" 
										className="form-select form-select-lg form-control ml-3"
										value={specialization}
										onChange={(event) => handleChange(event)}
										style={{"border": "2px solid black"}}
									>
									  <option value="Female">Urology</option>
									  <option value="Male">Opthalmology</option>
									  <option value="Others">Neurology</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-3"></div>
								<div className="col-12 col-sm-8 mt-4 mb-4">
									<button 
										className="register-btn"
										onClick={(event) => handleRegistration(event)}
									>
										Register
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
		</div>
	);
}

export default RegistrationForm;