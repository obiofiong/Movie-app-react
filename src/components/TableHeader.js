import React from "react";
import "../App.css";
// import columns from "./columns"

function TableHeader({ onSort, sortColumn, columns }) {
	const raiseSort = (path) => {
		const sortColumnHold = { ...sortColumn };
		if (sortColumnHold.path === path)
			sortColumnHold.order = sortColumnHold.order === "asc" ? "desc" : "asc";
		else {
			sortColumnHold.path = path;
			sortColumnHold.order = "asc";
		}
		onSort(sortColumnHold);
	};
	const renderSortIcon = (column) => {
		if (column.path !== sortColumn.path) return null;
		if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
		return <i className="fa fa-sort-desc"></i>;
	};
	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<th
						className="clickable"
						key={column.path || column.key}
						onClick={() => raiseSort(column.path)}>
						{column.name}
						{renderSortIcon(column)}
					</th>
				))}
			</tr>
		</thead>
	);
}

export default TableHeader;
