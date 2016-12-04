import * as Action from '../actions/sheet_actions.js';
import {blankSheet} from '../utils/grid_utils';
import {merge} from 'lodash';



const defaults = {
  activeSheet: "Sheet1",
  sheets: {
    Sheet1: blankSheet()
  }
};

function SheetReducer(state = defaults, action) {
  const newState = merge({}, state);
  switch(action.type) {
    case Action.UPDATE_CELL:
      const cell = action.cell;
      const sheet = newState.sheets[newState.activeSheet];

      sheet[cell.row][cell.col] = cell.content;

      return newState;

    case Action.CHANGE_ACTIVE_SHEET:
      newState.activeSheet = action.activeSheet
      return newState;

    case Action.ADD_SHEET:
      newState.sheets[action.name] = blankSheet();
      newState.activeSheet = action.name;
      
      return newState;
    default:
      return state;
  }
}

export default SheetReducer;
