import React from "react";

function MovieForm({match, history}) {
	return (
		<>
			<h1>Movie Form</h1>
			<h2>{match.params.id}</h2>
            <button className ="btn btn-primary" onClick ={() => {history.push("/movies")}}>Save</button>
		</>
	); 
}
export default MovieForm;

