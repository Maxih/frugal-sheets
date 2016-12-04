import React from 'react';
import GridContainer from '../grid/grid_container';
import SheetNavContainer from './sheet_nav_container';


export default class Doc extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const sheets = Object.keys(this.props.sheets).map((sheet) => {
      if(sheet === this.props.activeSheet) {
        return (
          <GridContainer key={sheet} sheet={this.props.sheets[this.props.activeSheet]} />
        )
      }
      return;
    });
    return (

      <section className="doc-wrapper">
        <section className="doc">
          {sheets}
        </section>
        <section className="sheet-nav">
          <SheetNavContainer />
        </section>
      </section>
    );
  }
}
