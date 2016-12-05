import { connect } from 'react-redux';
import GridHeaderCell from './grid_header_cell';
import {resizeRow, resizeCol} from '../../actions/sheet_actions';

const mapStateToProps = (state, ownProps) => {

  const curContent = (ownProps.rowId === "" || ownProps.colId === "") ? ownProps.headerVal : state.doc.sheets[state.doc.activeSheet].data[ownProps.rowId][ownProps.colId]
  return {
    selection: state.doc.sheets[state.doc.activeSheet].workingArea.selection,
    activeCell: state.doc.sheets[state.doc.activeSheet].workingArea.activeCell,
    activeSheet: state.doc.activeSheet,
  };
};

const mapDispatchToProps = dispatch => ({
  resizeRow: (rowId, height) => dispatch(resizeRow(rowId, height)),
  resizeCol: (colId, width) => dispatch(resizeCol(colId, width))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridHeaderCell);
