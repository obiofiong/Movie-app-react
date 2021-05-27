import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
// import columns from "./columns";

function MoviesTable({ moviesDisplay, onDelete, onSort, sortColumn }) {
	const columns = [
		{
			path: "title",
			name: "Title",
			content: (movie) => (
				<Link to={`/movies/${movie._id}`}>{movie.title}</Link>
			),
		},
		{ path: "genre.name", name: "Genre" },
		{ path: "numberInStock", name: "Stock" },
		{ path: "dailyRentalRate", name: "Rate" },
		{
			key: "delete",
			content: (movie) => (
				<button
					onClick={() => onDelete(movie)}
					className="btn btn-danger btn-sm">
					Delete
				</button>
			),
		},
		// {},
	];

	return (
		<div>
			<Table
				sortColumn={sortColumn}
				onSort={onSort}
				moviesDisplay={moviesDisplay}
				columns={columns}
				onDelete={onDelete}
			/>
		</div>
	);
}

export default MoviesTable;
