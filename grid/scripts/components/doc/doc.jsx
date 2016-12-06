import React from 'react';
import GridContainer from '../grid/grid_container';
import SheetNavContainer from './sheet_nav_container';
import ToolBoxContainer from '../tool/tool_box_container';

export default class Doc extends React.Component {
  render() {
    return (

      <section className="doc-wrapper">
        <section className="doc-editor">
          <ToolBoxContainer />
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
