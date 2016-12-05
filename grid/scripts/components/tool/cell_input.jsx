import React from 'react';

export default class CellInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content
    }

    this.cellChanged = this.cellChanged.bind(this);
  }

  cellChanged(e) {
    this.setState({content: e.target.value});
    const {activeCell, updateCell} = this.props;
    const cell = {
      content: e.target.value,
      col: activeCell.col,
      row: activeCell.row
    }

    updateCell(cell);
  }

  render() {

    return (
      <input type="text" onChange={this.cellChanged} value={this.props.content} />
    );
  }
}
