import React from 'react';
import ReactDOM from 'react-dom';
import * as Util from '../../utils/grid_utils';


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

  componentDidUpdate() {
    if(this.refs.cellTextArea) {
      ReactDOM.findDOMNode(this.refs.cellTextArea).focus();
    }
  }

  shouldComponentUpdate(nextProps) {
    if(
      (this.props.cell.content !== nextProps.cell.content) ||
      (this.props.cell.width !== nextProps.cell.width) ||
      (this.props.cell.height !== nextProps.cell.height) ||
      (this.props.cell.selected !== nextProps.cell.selected) ||
      (this.props.cell.active !== nextProps.cell.active))
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

    // if(!(startVal.row === endVal.row && startVal.col === endVal.col))
    //   if(Util.cellInSelection(rowId, colId, startVal, endVal))
    //     className += " active-cell";

    if(this.props.cell.selected) {
      className += " active-cell";
    }

    if(this.props.cell.active)
      className += " selected-cell";

      return className;
  }

  render() {
    let content = this.props.cell.content;

    if(this.props.cell.active) {
      content = (
        <textarea ref="cellTextArea" onChange={this.cellChanged} value={content} />
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
