import React from 'react';
import GridCellContainer from './grid_cell_container';

export default class GridHeader extends React.Component {
  render() {
    const cells = this.props.row.map((cell, idx) => {
      if(!this.props.col) {
        return (
          <GridCellContainer content={cell} key={idx} colId={idx} rowId={this.props.curId} header={true} />
        );
      } else {
        return (
          <GridCellContainer content={cell} key={idx} colId={this.props.curId} rowId={idx} header={true} />
        );
      }
    });

    return (
      <span className="grid-row">
        {cells}
      </span>
    );
  }
}
