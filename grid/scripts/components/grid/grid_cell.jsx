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
  }

  shouldComponentUpdate(nextProps) {
    if(
      (this.props.cell.content !== nextProps.cell.content) ||
      (this.props.cell.width !== nextProps.cell.width) ||
      (this.props.cell.height !== nextProps.cell.height) ||
      (this.props.selected !== nextProps.selected) ||
      (this.props.active !== nextProps.active))
        return true;

    const oldKeys = Object.keys(this.props.cell.style).sort();
    const newKeys = Object.keys(nextProps.cell.style).sort();

    let is_same = (oldKeys.length == newKeys.length) && oldKeys.every((element, index) => {
        return element === newKeys[index] && this.props.cell.style[element] === nextProps.cell.style[element];
    });

    return !is_same;
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
        <CellInputContainer styling={true} refName="cellRef" cell={this.props.cell} updateCell={this.props.updateCell} />
      );
    }

    const style = merge({}, this.props.cell.style, {
      width: this.props.cell.width,
      height: this.props.cell.height
    });



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
