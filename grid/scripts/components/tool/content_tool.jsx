import React from 'react';

export default class ContentTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

    this.contentChanged = this.contentChanged.bind(this);
  }

  contentChanged(e) {
    this.setState({content: e.target.value});
    const {activeCell, updateCell} = this.props;
    const cell = {
      content: this.state.content,
      col: activeCell.col,
      row: activeCell.row
    }

    updateCell(cell);
  }

  render() {
    return (
      <section className="formula-bar">
        <span className="formula-logo">fx</span>
        <span className="formula">
          <input type="text" value={this.state.content} onChange={this.contentChanged}/>
        </span>
      </section>
    );
  }
}

<div id="t-formula-bar-label"><div class="docs-icon goog-inline-block"><div class="docs-icon-img-container docs-icon-img docs-icon-insert-formula"></div></div></div>
