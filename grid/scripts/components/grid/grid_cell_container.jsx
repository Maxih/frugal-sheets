import { connect } from 'react-redux';
import { receiveStartCell, receiveEndCell, tempEndCell, updateCell } from '../../actions/sheet_actions';
import GridCell from './grid_cell';
import {isCellActive, isCellSelected} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

  return {
    selected: isCellSelected(state.doc.sheets[state.doc.activeSheet].workingArea.activeRange, state.doc.sheets[state.doc.activeSheet].data[ownProps.rowId][ownProps.colId]),
    active: isCellActive(state.doc.sheets[state.doc.activeSheet].workingArea.activeRange, state.doc.sheets[state.doc.activeSheet].data[ownProps.rowId][ownProps.colId]),
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
