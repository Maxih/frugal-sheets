import React from 'react';
import {numToChar, between, blankSheet} from '../../utils/grid_utils';
import GridRow from './grid_row';
import GridHeader from './grid_header';


export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: props.sheet
    }
  }

  rowHeads() {
    const rowHeads = new Array(this.state.grid.length);
    for(let i = 0; i < rowHeads.length; i++) {
      rowHeads[i] = `${i+1}`;
    }
    return rowHeads;
  }

  colHeads() {
    const columnHeads = new Array(this.state.grid[0].length);

    for(let i = 0; i < columnHeads.length; i++) {
      columnHeads[i] = numToChar(i+1);
    }

    return columnHeads;
  }

  render() {
    const rows = this.state.grid.map((row, idx) => {
      return (
        <GridRow key={idx} rowId={idx} row={row} />
      );
    });

    return (
      <section className="grid-wrapper">
        <span className="grid-blank-label"></span>
        <span className="grid-column-labels">
          <GridHeader curId="" row={this.colHeads()}/>
        </span>
        <span className="grid-row-labels">
          <GridHeader curId="" row={this.rowHeads()} col={true} />
        </span>
        <section className="grid">
          {rows}
        </section>
      </section>
    );
  }
}
