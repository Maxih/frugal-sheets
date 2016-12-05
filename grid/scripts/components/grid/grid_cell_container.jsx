import { connect } from 'react-redux';
import { receiveStartCoord, receiveEndCoord, tempEndCoord, updateCell } from '../../actions/sheet_actions';
import GridCell from './grid_cell';

const mapStateToProps = (state, ownProps) => {

  return {
    selecting: state.doc.sheets[state.doc.activeSheet].workingArea.selecting,
    selection: state.doc.sheets[state.doc.activeSheet].workingArea.selection,
    activeCell: state.doc.sheets[state.doc.activeSheet].workingArea.activeCell,
    cell: state.doc.sheets[state.doc.activeSheet].data[ownProps.rowId][ownProps.colId]
  };
};

const mapDispatchToProps = dispatch => ({
  receiveStartCoord: (coord) => dispatch(receiveStartCoord(coord)),
  receiveEndCoord: (coord) => dispatch(receiveEndCoord(coord)),
  tempEndCoord: (coord) => dispatch(tempEndCoord(coord)),
  updateCell: (cell) => dispatch(updateCell(cell)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridCell);
