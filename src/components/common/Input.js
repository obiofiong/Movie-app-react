import React from "react";

function input({ title, variable, errors, onChange }) {
	return (
		<div className="form-group">
			<label htmlFor={title}>
				{title.charAt(0).toUpperCase() + title.slice(1)}
			</label>
			<input
				value={variable}
				onChange={onChange}
				id={title}
				name={title}
				type={title === "username" ? "text" : "password"}
				className="form-control"
			/>
			{errors[title] && (
				<div className="alert alert-danger">{errors[title]}</div>
			)}
		</div>
	);
}

export default input;
