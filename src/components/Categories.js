import React from "react";

function Categories({
	genres,
	onGenreSelect,
	textProperty,
	value,
	selectedGenre,
}) {
	return (
		<div>
			<ul className="list-group ">
				{genres.map((genre) => (
					<li
						key={genre[value]}
						className={
							selectedGenre
								? selectedGenre.name === genre[textProperty]
									? "list-group-item active"
									: "list-group-item"
								: "list-group-item"
						}
						onClick={() => onGenreSelect(genre)}>
						{genre[textProperty]}
					</li>
				))}
			</ul>
		</div>
	);
}
Categories.defaultProps = {
	textProperty: "name",
	value: "_id",
};

export default Categories;
