import React from 'react';
import * as Util from '../../utils/grid_utils';


export default class GridHeaderCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
      size: 0
    }

    this.headerResize = this.headerResize.bind(this);
  }

  headerResize(e) {
    const offset = $(e.target.parentElement).offset();

    if(this.props.col) {
      let width = e.clientX - offset.left;
      this.setState({size: width});
      e.target.parentElement.style.width = width;
    } else {
      let height = e.clientY - offset.top;
      this.setState({size: height});
      e.target.parentElement.style.height = height;
    }
  }

  resizeEnd() {
    console.log("resize rows");
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

    return (
      <span
        className={this.generateCellClass()}

        >
        {this.state.content}
        <span draggable="true" onDrag={this.headerResize} onDragEnd={this.resizeEnd} className="resizer"></span>
      </span>
    );
  }
}
