import React from 'react';
import GridCellContainer from './grid_cell_container';

export default class GridRow extends React.Component {
  render() {
    const cells = this.props.row.map((cell, idx) => {
      return (
        <GridCellContainer content={cell} key={idx} colId={idx} rowId={this.props.rowId} header={this.props.header} />
      );
    });

    return (
      <span className="grid-row">
        {cells}
      </span>
    );
  }
}
