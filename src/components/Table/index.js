import React from "react";
import PropTypes from "prop-types";

Table.propTypes = {
	/** The Table Columns */
	columns: PropTypes.array.isRequired,
	/** The Table Rows */
	rows: PropTypes.arrayOf(PropTypes.array),
	/** Column Meta data, transform data into presentation values */
	columnMeta: PropTypes.object.isRequired,
	/** Formatting function to transform raw row data into */
	rowValueFormatter: PropTypes.func.isRequired
};


Table.defaultProps = {
	// THIS IS A HACK, REMOVE IT OR EXPLAIN WHY IT'S HERE
	rows: []
};
/**
 * The Table Component
 * 
 * @class Table
 */
function Table({columns, columnMeta, rows, rowValueFormatter}) {
	console.log({columns, columnMeta, rows});
  debugger //eslint-disable-line
	return (
		<table>
			<thead>
				<tr>
					{
						columns.map(column => {
							return <th>{columnMeta[column]}</th>;
						})
					}
				</tr>
			</thead>
			<tbody>
				{
					rows.map(row => {
						return (
							<tr>
								{
									columns.map(meta => {
										console.log({row, meta, columns});
										return <td>{rowValueFormatter(meta, row[meta])}</td>;
									})
								}
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
}

export default Table;