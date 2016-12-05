import React from 'react';
import ReactDOM from 'react-dom';
import * as Util from '../../utils/grid_utils';


export default class GridCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseAction = this.mouseAction.bind(this);
    this.cellChanged = this.cellChanged.bind(this);
  }

  componentDidUpdate() {
    if(this.refs.cellTextArea) {
      ReactDOM.findDOMNode(this.refs.cellTextArea).focus();
    }
  }

  mouseAction(e) {
    const {rowId, colId} = this.props;
    const {receiveStartCoord, receiveEndCoord} = this.props;

    if(e.type === "mouseup") {
      receiveEndCoord({row:rowId, col:colId})
    } else {
      receiveStartCoord({coord: {row:rowId, col:colId}, content:this.state.content})
    }
  }

  mouseOver() {
    const {rowId, colId, tempEndCoord} = this.props;

    if(this.props.selecting) {

      tempEndCoord({row:rowId, col:colId});
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

    const startVal = this.props.selection.start;
    const endVal = this.props.selection.end;
    const {rowId, colId, activeCell} = this.props;

    if(!(startVal.row === endVal.row && startVal.col === endVal.col))
      if(Util.cellInSelection(rowId, colId, startVal, endVal))
        className += " active-cell";

    if(this.isSelectedCell())
      className += " selected-cell";

      return className;
  }

  isSelectedCell() {
    const {rowId, colId, activeCell} = this.props;
    return (rowId === activeCell.row && colId === activeCell.col)
  }

  render() {
    let content = this.props.content;

    if(this.isSelectedCell()) {
      content = (
        <textarea ref="cellTextArea" onChange={this.cellChanged} value={content} />
      );
    }

    return (
      <span
        className={this.generateCellClass()}
        onMouseDown={this.mouseAction}
        onMouseUp={this.mouseAction}
        onMouseOver={this.mouseOver}
        >
        {content}
      </span>
    );
  }
}
