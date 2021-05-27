import Joi from "joi-browser";

function formLogic() {
	const validate = () => {
		const options = {
			abortEarly: false, // to show full errors i.e prevent from aobrting after first error
		};
        console.log(username, password, schema)
		const result = Joi.validate({ username, password }, schema, options);
        console.log(result)
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

	const handleSubmit = () => {
		e.preventDefault();

		const errors = validate();
		return errors;
	};

	// const validateProperty = (target) => {
	// 	const obj = { [target.name]: target.value }; //inititalizing the dynamic error property fr validation, whether username or password
	// 	const subSchema = { [target.name]: schema[target.name] };
	// 	const result = Joi.validate(obj, subSchema);
	// 	return result.error ? result.error.details[0].message : null;

	// 	// CUSTOM VALIDATION
	// 	// if (target.name === "username") {
	// 	// 	if (target.value.trim() === "") return "Username is required.";
	// 	// }
	// 	// if (target.name === "password") {
	// 	// 	if (target.value.trim() === "") return "Password is required.";
	// 	// }
	// };
	const handleChange = (e, setUsername, setPassword) => {
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

		// const errorsM = { ...errors };
		// const errorMessage = validateProperty(e.target);
		// if (errorMessage) {
		// 	errorsM[e.target.name] = errorMessage;
		// } else delete errorsM[e.target.name];
		// setErrors(errorsM);
	};
}

export default formLogic;
