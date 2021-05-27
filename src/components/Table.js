import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ sortColumn, onSort, moviesDisplay, columns, onDelete }) {
	return (
		<table className="table ">
			<TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
			<TableBody data={moviesDisplay} columns={columns} onDelete={onDelete} />
		</table>
	);
}

export default Table;
