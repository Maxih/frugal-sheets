import { connect } from 'react-redux';
import GridHeaderCell from './grid_header_cell';

const mapStateToProps = (state, ownProps) => {

  const curContent = (ownProps.rowId === "" || ownProps.colId === "") ? ownProps.headerVal : state.doc.sheets[state.doc.activeSheet].data[ownProps.rowId][ownProps.colId]
  return {
    selection: state.doc.sheets[state.doc.activeSheet].workingArea.selection,
    activeCell: state.doc.sheets[state.doc.activeSheet].workingArea.activeCell,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridHeaderCell);
