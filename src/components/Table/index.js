import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import classNames from "./index.css";

Table.propTypes = {
  /** The Table Columns */
  columns: PropTypes.array.isRequired,
  // Note: We could go into specifics here of the response, but I want to keep this
  // component as generic as possible.
  /** The Table Rows */
  rows: PropTypes.arrayOf(PropTypes.object),
  /** Column Meta data, transform data into presentation values */
  columnMeta: PropTypes.object.isRequired,
  /** Formatting function to transform raw row data into */
  rowFormatter: PropTypes.func.isRequired
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
function Table({columns, columnMeta, rows, rowFormatter, classnames}) {
  return (
    <section className={`${classNames["table-wrapper"]} ${classnames}`}>
      <table>
        <thead>
          <tr>
            {
              columns.map(column => {
                return <th key={uuid()}>{columnMeta[column]}</th>;
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map(row => {
              return (
                <tr key={uuid()}>
                  {
                    columns.map(meta => {
                      return <td key={uuid()}>{rowFormatter(meta, row)}</td>;
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