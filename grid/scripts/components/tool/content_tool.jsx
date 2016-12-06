import React from 'react';
import CellInputContainer from '../tool/cell_input_container';

export default class ContentTool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="formula-bar">
        <span className="formula-logo">fx</span>
        <span className="formula">
          <CellInputContainer refName="formulaRef" updateCell={this.props.updateCell} cell={this.props.cell} />
        </span>
      </section>
    );
  }
}
