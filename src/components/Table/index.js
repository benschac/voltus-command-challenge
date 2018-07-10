import React from "react";
import PropTypes from "prop-types";

import classNames from './index.css';

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
function Table({columns, columnMeta, rows, rowValueFormatter, classnames}) {
	return (
		<section className={`${classNames["table-wrapper"]} ${classnames}`}>
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
											return <td>{rowValueFormatter(meta, row[meta])}</td>;
										})
									}
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</section>
	);
}

export default Table;