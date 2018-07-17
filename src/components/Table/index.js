import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import classNames from "./index.css";

/**
 * The Table Component
 * 
 * @class Table
 */
class Table extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    rows: []
  };

  // Continue working on table when I have
  // a minute
  
  /** @inheritDoc */
  render() {
    const {columns, columnMeta, rows, rowFormatter, classnames} = this.props;
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
                        return (
                          <td key={uuid()}>{rowFormatter(meta, row)}</td>
                        );
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
}

export default Table;