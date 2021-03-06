import { connect } from 'react-redux';
import { updateCell } from '../../actions/sheet_actions';
import ContentTool from './content_tool';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  updateCell: (cell) => dispatch(updateCell(cell)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentTool);
