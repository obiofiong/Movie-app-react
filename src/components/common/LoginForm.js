import React, { useState } from "react";
import Input from "./Input";
import Joi from "joi-browser";
// import formLogic from "./formLogic";
// import Form from "./Form";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [account, setAccount] = useState({ username, password });
	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	};

	// const doSubmit = () => {
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = validate();
		errors ? setErrors(errors) : setErrors({});
		if (errors) return; //sends back error before sending to backend

		console.log("Submitted successfully", username, password);
	};

	const validate = () => {
		const options = {
			abortEarly: false, // to show full errors i.e prevent from aobrting after first error
		};
		const result = Joi.validate({ username, password }, schema, options);
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

	// <Form schema = {schema} />;

	return (
		<div>
			<h1>Login page</h1>
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
				<button disabled={validate()} className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
