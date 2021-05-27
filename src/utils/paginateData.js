import _ from "lodash";

export function paginateData(items, pageNumber, pageSize) {
	const start = pageSize * (pageNumber - 1);
	return _(items).slice(start).take(pageSize).value();
}
