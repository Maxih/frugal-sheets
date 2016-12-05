import * as Action from '../actions/sheet_actions.js';
import {blankSheet, getCellsBetween, getRowFromId, getColFromId} from '../utils/grid_utils';
import {merge} from 'lodash';

const workingAreaDefaults = {
  activeCell: { pos: {row: 0, col: 0}, content: ""},
  activeRange: [],
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

    case Action.RECEIVE_START_CELL:

      // Reset previously selected items to unselected
      for(let i = 0; i < curWorkingArea.activeRange.length; i++)
      {
        for(let j = 0; j < curWorkingArea.activeRange[i].length; j++) {
          const cell = curWorkingArea.activeRange[i][j];
          curSheet.data[cell.pos.row][cell.pos.col].selected = false;
        }
      }

      curWorkingArea.selecting = action.selecting;

      curSheet.data[curWorkingArea.activeCell.pos.row][curWorkingArea.activeCell.pos.col].active = false;

      curWorkingArea.activeCell = action.cell;
      curWorkingArea.activeCell.active = true;

      curSheet.data[action.cell.pos.row][action.cell.pos.col].active = true;

      curWorkingArea.selection.start = action.cell.pos;
      curWorkingArea.selection.end = {};

      return newState;


    case Action.RECEIVE_END_CELL:
      curWorkingArea.selecting = action.selecting;
      curWorkingArea.selection.end = action.cell.pos;

    case Action.SELECTING_TEMP_CELL:
      curWorkingArea.selection.end = action.cell.pos;

      // Reset previously selected items to unselected
      for(let i = 0; i < curWorkingArea.activeRange.length; i++)
      {
        for(let j = 0; j < curWorkingArea.activeRange[i].length; j++) {
          const cell = curWorkingArea.activeRange[i][j];
          curSheet.data[cell.pos.row][cell.pos.col].selected = false;
        }
      }

      curWorkingArea.activeRange = getCellsBetween(curSheet.data, curWorkingArea.selection.start, curWorkingArea.selection.end)

      for(let i = 0; i < curWorkingArea.activeRange.length; i++)
      {
        for(let j = 0; j < curWorkingArea.activeRange[i].length; j++) {
          const cell = curWorkingArea.activeRange[i][j];
          curSheet.data[cell.pos.row][cell.pos.col].selected = true;
        }
      }
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
