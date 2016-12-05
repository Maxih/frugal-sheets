import React from 'react';
import CellInputContainer from '../tool/cell_input_container';

export default class ContentTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content
    }
  }

  render() {
    return (
      <section className="formula-bar">
        <span className="formula-logo">fx</span>
        <span className="formula">
          <CellInputContainer content={this.state.content} />
        </span>
      </section>
    );
  }
}
