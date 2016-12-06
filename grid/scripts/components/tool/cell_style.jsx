import React from 'react';
import {merge} from 'lodash';
import { CompactPicker } from 'react-color';


export default class CellStyle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickingColor: false
    }

    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.cellColorChange = this.cellColorChange.bind(this);
  }

  toggleStyle(styleName, e) {

    if(this.props.cell.style === undefined)
      return;

    const newStyledCell = merge({}, this.props.cell);
    const keys = Object.keys(styleName);

    if(newStyledCell.style[keys[0]] === undefined)
      newStyledCell.style = merge(newStyledCell.style, styleName);
    else
      delete newStyledCell.style[keys[0]];


    this.props.updateRange(newStyledCell);
  }

  updateCellStyles(cell) {

  }

  toggleColorPicker(e) {
    this.setState({pickingColor: !this.state.pickingColor});
  }

  cellColorChange(color, event) {
    if(this.props.cell.style === undefined)
      return;

    const newStyledCell = merge({}, this.props.cell);
    newStyledCell.style = merge(newStyledCell.style, {"backgroundColor": color.hex});

    this.props.updateRange(newStyledCell);
    this.setState({pickingColor: false});
  }

  render() {
    const cellStyle = this.props.cell.style || {};

    const colorPicker = (
      <div className="color-picker">
        <CompactPicker onChange={this.cellColorChange}/>
      </div>
    )

    return (
      <div className="style-bar">
        <ul>
          <li
            className={cellStyle.fontWeight === undefined ? "style-type-bold" : "style-type-bold active-style"}
            onClick={this.toggleStyle.bind(this, {"fontWeight": "bold"})}
            ></li>

          <li
            className={cellStyle.fontStyle === undefined ? "style-type-italic" : "style-type-italic active-style"}
            onClick={this.toggleStyle.bind(this, {"fontStyle": "italic"})}
            ></li>

          <li className={cellStyle.textDecoration === undefined ? "style-type-linethrough" : "style-type-linethrough active-style"}
              onClick={this.toggleStyle.bind(this, {"textDecoration": "line-through"})}
            ></li>

          <li className={cellStyle.backgroundColor === undefined ? "style-type-paintbucket" : "style-type-paintbucket active-style"}
              onClick={this.toggleColorPicker}
            ></li>

          {this.state.pickingColor ? colorPicker : ""}
        </ul>
      </div>
    );
  }
}
