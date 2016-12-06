import * as Action from '../actions/sheet_actions.js';
import {blankSheet, getCellsBetween, getRowFromId, getColFromId, updateActiveRangeStyle, mapRangeToGrid} from '../utils/grid_utils';
import {merge} from 'lodash';

const workingAreaDefaults = {
  activeCell: {
    content: "",
    width: 100,
    height: 26,
    style: {},
    pos: {
      row: 0,
      col: 0
    },
  },
  activeRange: [],
  selecting: false,
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
    case Action.UPDATE_RANGE:
      curWorkingArea.activeRange = updateActiveRangeStyle(curWorkingArea.activeRange, action.cell);
      curSheet.data = mapRangeToGrid(curWorkingArea.activeRange, curSheet.data);

    case Action.UPDATE_CELL:
      curSheet.data[action.cell.pos.row][action.cell.pos.col] = action.cell;
      curWorkingArea.activeCell = action.cell;
      return newState;


    case Action.CHANGE_ACTIVE_SHEET:
      newState.activeSheet = action.activeSheet
      return newState;

    case Action.ADD_SHEET:
      newState.sheets[action.name] = {data: blankSheet(), workingArea: workingAreaDefaults};
      newState.activeSheet = action.name;
      return newState;

    case Action.RECEIVE_START_CELL:
      curWorkingArea.selecting = action.selecting;
      curWorkingArea.activeCell = action.cell;
      return newState;

    case Action.RECEIVE_END_CELL:
      curWorkingArea.selecting = action.selecting;

    case Action.SELECTING_TEMP_CELL:
      curWorkingArea.activeRange = getCellsBetween(curSheet.data, curWorkingArea.activeCell.pos, action.cell.pos)
      return newState;

    case Action.RESIZE_COL:
      for(let i = 0; i < curSheet.data.length; i++)
        curSheet.data[i][action.colId].width = action.width;

      return newState;

    case Action.RESIZE_ROW:
      for(let i = 0; i < curSheet.data[0].length; i++)
        curSheet.data[action.rowId][i].height = action.height;

      return newState;

    case Action.SELECT_COL:
      curWorkingArea.activeRange = getColFromId(curSheet.data, action.colId);
      curWorkingArea.activeCell = curSheet.data[0][action.colId];
      return newState;

    case Action.SELECT_ROW:
      curWorkingArea.activeRange = getRowFromId(curSheet.data, action.rowId);
      curWorkingArea.activeCell = curSheet.data[action.rowId][0];
      return newState;

    default:
      return state;
  }
}

export default SheetReducer;
