import { connect } from 'react-redux';
import { updateCell } from '../../actions/sheet_actions';
import CellInput from './cell_input';

const mapStateToProps = (state) => {
  const cell = state.doc.sheets[state.doc.activeSheet].workingArea.activeCell;

  return {
    activeCell: cell,
    content: state.doc.sheets[state.doc.activeSheet].data[cell.row][cell.col]
  };
};

const mapDispatchToProps = dispatch => ({
  updateCell: (cell) => dispatch(updateCell(cell)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellInput);
