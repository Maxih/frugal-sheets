import { connect } from 'react-redux';
import { receiveStartCell, receiveEndCell, tempEndCell, updateCell } from '../../actions/sheet_actions';
import GridCell from './grid_cell';

const mapStateToProps = (state, ownProps) => {

  return {
    selecting: state.doc.sheets[state.doc.activeSheet].workingArea.selecting,
    cell: state.doc.sheets[state.doc.activeSheet].data[ownProps.rowId][ownProps.colId]
  };
};

const mapDispatchToProps = dispatch => ({
  receiveStartCell: (cell) => dispatch(receiveStartCell(cell)),
  receiveEndCell: (cell) => dispatch(receiveEndCell(cell)),
  tempEndCell: (cell) => dispatch(tempEndCell(cell)),
  updateCell: (cell) => dispatch(updateCell(cell)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridCell);
