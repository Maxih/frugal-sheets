import React from 'react';
import * as Util from '../../utils/grid_utils';
import {merge} from 'lodash';
import CellInputContainer from '../tool/cell_input_container';


export default class GridCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.cell.content
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseAction = this.mouseAction.bind(this);
    this.cellChanged = this.cellChanged.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if(
      (this.props.cell.content !== nextProps.cell.content) ||
      (this.props.cell.width !== nextProps.cell.width) ||
      (this.props.cell.height !== nextProps.cell.height) ||
      (this.props.selected !== nextProps.selected) ||
      (this.props.active !== nextProps.active))
      return true;

    return false
  }

  mouseAction(e) {
    const {rowId, colId} = this.props;
    const {receiveStartCell, receiveEndCell} = this.props;

    if(e.type === "mouseup") {
      receiveEndCell(this.props.cell)
    } else {
      receiveStartCell(this.props.cell)
    }
  }

  mouseOver() {
    const {rowId, colId, tempEndCell} = this.props;

    if(this.props.selecting) {

      tempEndCell(this.props.cell);
    }

  }

  cellChanged(e) {
    this.setState({content: e.target.value});
    const {rowId, colId, updateCell} = this.props;
    const cell = {
      content: e.target.value,
      col: colId,
      row: rowId
    }

    updateCell(cell);
  }

  generateCellClass() {
    let className = "grid-cell";

    if(this.props.selected) {
      className += " selected-cell";
    }

    if(this.props.active)
      className += " active-cell";

      return className;
  }

  render() {
    let content = this.props.cell.content;

    if(this.props.active) {
      content = (
        <CellInputContainer refName="cellRef" cell={this.props.cell} updateCell={this.props.updateCell} />
      );
    }

    const style = {
      width: this.props.cell.width,
      height: this.props.cell.height
    }

    return (
      <span
        className={this.generateCellClass()}
        onMouseDown={this.mouseAction}
        onMouseUp={this.mouseAction}
        onMouseOver={this.mouseOver}
        style={style}
        >
        {content}
      </span>
    );
  }
}
