import * as Action from '../actions/working_area_actions.js';
import {merge} from 'lodash';

const defaults = {
  activeCell: { row: 0, col: 0},
  selecting: false,
  selection: {
    start: {},
    end: {},
  }
};

function WorkingAreaReducer(state = defaults, action) {
  const newState = merge({}, state);
  switch(action.type) {
    case Action.RECEIVE_START_COORD:
      newState.activeCell = action.start;
      newState.selection.start = action.start;
      newState.selection.end = {};

      newState.selecting = action.selecting;
      return newState;

    case Action.RECEIVE_END_COORD:
      newState.selection.end = action.end;
      newState.selecting = action.selecting;

      if(newState.selection.end.row === newState.selection.start.row && newState.selection.end.col === newState.selection.start.col)
        newState.selection = {start: {}, end: {}};

      return newState;
    case Action.SELECTING_TEMP_COORD:
      newState.selection.end = action.end;
      return newState;

    default:
      return state;
  }
}

export default WorkingAreaReducer;
