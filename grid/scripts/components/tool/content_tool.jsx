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
  }

  render() {
    return (
      <section className="content-tool">
        <span className="fn-logo"></span>
        <span className="content-input">
          <textarea value={this.state.content} onChange={this.contentChanged}/>
        </span>
      </section>
    );
  }
}
