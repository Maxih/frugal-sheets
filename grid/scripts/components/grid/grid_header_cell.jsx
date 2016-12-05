import React from 'react';
import * as Util from '../../utils/grid_utils';



export default class GridHeaderCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.cell.content,
      size: props.cell.size
    }

    this.headerResize = this.headerResize.bind(this);
    this.resizeEnd = this.resizeEnd.bind(this);
  }

  headerResize(e) {
    const offset = $(e.target.parentElement).offset();

    if(this.props.col) {
      let width = e.clientX - offset.left;

      if(width > 0) {
        if(width < 25)
          width = 25;

        this.setState({size: width});
        e.target.parentElement.style.width = width;
      }
    } else {
      let height = e.clientY - offset.top;

      if(height > 0) {
        if(height < 26)
          height = 26;

        this.setState({size: height});
        e.target.parentElement.style.height = height;
      }
    }
  }

  resizeEnd() {
    const {rowId, colId, resizeCol, resizeRow} = this.props;
    if(this.props.col) {
      resizeCol(colId, this.state.size);
    } else {
      resizeRow(rowId, this.state.size);
    }
  }

  generateCellClass() {
    let className = "grid-cell";

    const startVal = this.props.selection.start;
    const endVal = this.props.selection.end;
    const {rowId, colId, activeCell} = this.props;


    if(((activeCell.row === rowId || activeCell.col === colId) ||
      (Util.between(rowId, startVal.row, endVal.row) || Util.between(colId, startVal.col, endVal.col)))){
      className += " active-cell";
    }

    return className;
  }

  render() {

    const style = {};

    if(this.props.col) {
      style.width = this.props.cell.size;
    } else {
      style.height = this.props.cell.size;
    }

    return (
      <span
        className={this.generateCellClass()}
        style={style}
        >
        {this.state.content}
        <span draggable="true" onDrag={this.headerResize} onDragEnd={this.resizeEnd} className="resizer"></span>
      </span>
    );
  }
}
