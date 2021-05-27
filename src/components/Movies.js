import React, { useState } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../fakeGenreService";
import Pagination from "./Pagination";
import { paginateData } from "../utils/paginateData";
import Categories from "./Categories";
import MoviesTable from "./MoviesTable";

function Movies() {
	const [movies, setMovies] = useState(getMovies());
	const [pageSize, setPageSize] = useState(4);
	const [currentPage, setCurrentPage] = useState(1);
	const [genres, setGenres] = useState([
		{ id: "", name: "All Movies" },
		...getGenres(),
	]);
	const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

	const [selectedGenre, setselectedGenre] = useState({ name: "All Movies" });

	const handleDelete = (movie) => {
		const moviesUpdate = movies.filter((m) => m._id !== movie._id);
		setMovies(moviesUpdate);
	};
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const handleGenreSelect = (genre) => {
		setselectedGenre(genre);
		setCurrentPage(1);
	};
	const handleSort = (sortColumnHold) => {
		setSortColumn(sortColumnHold);
	};

	const filtered =
		selectedGenre && selectedGenre._id
			? movies.filter((m) => m.genre._id === selectedGenre._id)
			: movies;

	// Sorting the movies
	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const moviesDisplay = paginateData(sorted, currentPage, pageSize);

	if (movies.length === 0) {
		return (
			<p className="text-center ">
				Oopsies! There are currently no movies in the database
			</p>
		);
	} else {
		return (
			<div className="row">
				<div className="col-sm-2 mb-3">
					<Categories
						genres={genres}
						onGenreSelect={handleGenreSelect}
						selectedGenre={selectedGenre}
					/>
				</div>

				<div className="col-sm-10">
					<p>
						Showing{" "}
						<b>
							{moviesDisplay.length} of {filtered.length}
						</b>{" "}
						movies in the database
					</p>
					<MoviesTable
						moviesDisplay={moviesDisplay}
						sortColumn={sortColumn}
						onDelete={handleDelete}
						onSort={handleSort}
					/>

					<Pagination
						itemsCount={filtered.length}
						pageSize={pageSize}
						onPageChange={handlePageChange}
						currentPage={currentPage}
					/>
				</div>
			</div>
		);
	}
}

export default Movies;
