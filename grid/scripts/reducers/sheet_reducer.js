import * as Action from '../actions/sheet_actions.js';
import {blankSheet} from '../utils/grid_utils';
import {merge} from 'lodash';

const workingAreaDefaults = {
  activeCell: { row: 0, col: 0, content: ""},
  selecting: false,
  selection: {
    start: {},
    end: {},
  }
};

const defaults = {
  activeSheet: "Sheet1",
  sheets: {
    Sheet1: {
      workingArea: workingAreaDefaults,
      data: blankSheet()
    }
  }
};

function SheetReducer(state = defaults, action) {
  const newState = merge({}, state);
  const curSheet = newState.sheets[newState.activeSheet];
  const curWorkingArea = curSheet.workingArea;

  switch(action.type) {
    case Action.UPDATE_CELL:
      const cell = action.cell;
      curSheet.data[cell.row][cell.col].content = cell.content;
      curWorkingArea.activeCell.content = cell.content;
      return newState;

    case Action.CHANGE_ACTIVE_SHEET:
      newState.activeSheet = action.activeSheet
      return newState;

    case Action.ADD_SHEET:
      newState.sheets[action.name] = {data: blankSheet(), workingArea: workingAreaDefaults};
      newState.activeSheet = action.name;
      return newState;

    case Action.RECEIVE_START_COORD:
      curWorkingArea.activeCell.col = action.start.col;
      curWorkingArea.activeCell.row = action.start.row;
      curWorkingArea.selection.start = action.start;
      curWorkingArea.selection.end = {};
      curWorkingArea.selecting = action.selecting;
      curWorkingArea.activeCell.content = action.content;
      return newState;

    case Action.RECEIVE_END_COORD:
      curWorkingArea.selection.end = action.end;
      curWorkingArea.selecting = action.selecting;

      if(curWorkingArea.selection.end.row === curWorkingArea.selection.start.row && curWorkingArea.selection.end.col === curWorkingArea.selection.start.col)
        curWorkingArea.selection = {start: {}, end: {}};

      return newState;

    case Action.SELECTING_TEMP_COORD:
      curWorkingArea.selection.end = action.end;
      return newState;

    case Action.RESIZE_COL:

      for(let i = 0; i < curSheet.data.length; i++)
        curSheet.data[i][action.colId].width = action.width;

      return newState;

    case Action.RESIZE_ROW:

      for(let i = 0; i < curSheet.data[0].length; i++)
        curSheet.data[action.rowId][i].height = action.height;

      return newState;
    default:
      return state;
  }
}

export default SheetReducer;
