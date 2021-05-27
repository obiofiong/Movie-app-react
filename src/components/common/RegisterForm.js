import React, { useState } from "react";
import Input from "./Input";
import Joi from "joi-browser";

function RegisterForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required().email().label("Username"),
		password: Joi.string().required().min(5).label("Password"),
		name: Joi.required().label("Name"),
	};
	const handleSubmit = (e) => {
		e.preventDefault();
 
		const errors = validate();
		errors ? setErrors(errors) : setErrors({});
		if (errors) return; //sends back error before sending to backend

		console.log("Submitted successfully", username, password, name);
	};

	const validate = () => {
		const options = {
			abortEarly: false, // to show full errors i.e prevent from aobrting after first error
		};
		const result = Joi.validate({ username, password, name }, schema, options);
		if (!result.error) return null;

		const errors = {};
		for (let item of result.error.details) errors[item.path[0]] = item.message;
		return errors;

		//Custom validation
		// const errors = {};
		// if (username.trim() === "") {
		// 	errors.username = "Username is required.";
		// }
		// if (password.trim() === "") {
		// 	errors.password = "Password is required.";
		// }

		// return Object.keys(errors).length === 0 ? null : errors;
	};

	const handleChange = (e) => {
		switch (e.target.name) {
			case "username":
				// code block
				setUsername(e.target.value);
				break;
			case "password":
				// code block
				setPassword(e.target.value);
				break;
			case "name":
				setName(e.target.value);
				break;
		}

		const errorsM = { ...errors };
		const errorMessage = validateProperty(e.target);
		if (errorMessage) {
			errorsM[e.target.name] = errorMessage;
		} else delete errorsM[e.target.name];
		setErrors(errorsM);
	};
	const validateProperty = (target) => {
		const obj = { [target.name]: target.value }; //inititalizing the dynamic error property fr validation, whether username or password
		const subSchema = { [target.name]: schema[target.name] };
		const result = Joi.validate(obj, subSchema);
		return result.error ? result.error.details[0].message : null;

		// CUSTOM VALIDATION
		// if (target.name === "username") {
		// 	if (target.value.trim() === "") return "Username is required.";
		// }
		// if (target.name === "password") {
		// 	if (target.value.trim() === "") return "Password is required.";
		// }
	};

	return (
		<div>
			<form className="container-fluid" onSubmit={handleSubmit}>
				<Input
					title="username"
					variable={username}
					errors={errors}
					onChange={handleChange}
				/>
				<Input
					title="password"
					variable={password}
					errors={errors}
					onChange={handleChange}
				/>
				<Input
					title="name"
					variable={name}
					errors={errors}
					onChange={handleChange}
				/>
				<button disabled={validate()} className="btn btn-primary">
					Register
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
