import { connect } from 'react-redux';
import { receiveStartCoord, receiveEndCoord, tempEndCoord } from '../../actions/working_area_actions';
import { updateCell } from '../../actions/sheet_actions';
import GridCell from './grid_cell';

const mapStateToProps = (state) => {
  return {
    selecting: state.workingArea.selecting,
    selection: state.workingArea.selection,
    activeCell: state.workingArea.activeCell
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
