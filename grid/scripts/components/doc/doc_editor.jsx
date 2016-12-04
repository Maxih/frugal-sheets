import React from 'react';
import ContentToolContainer from '../tool/content_tool_container';


export default class DocEditor extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <section className="toolbox">
        <ContentToolContainer />
      </section>
    );
  }
}
