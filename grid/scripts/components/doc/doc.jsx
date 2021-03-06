import React from 'react';
import GridContainer from '../grid/grid_container';
import SheetNavContainer from './sheet_nav_container';
import DocEditorContainer from './doc_editor_container';


export default class Doc extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (

      <section className="doc-wrapper">
        <section className="doc-editor">
          <DocEditorContainer />
        </section>
        <section className="doc">
          <GridContainer />
        </section>
        <section className="sheet-nav">
          <SheetNavContainer />
        </section>
      </section>
    );
  }
}
