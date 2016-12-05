export const UPDATE_CELL = "UPDATE_CELL";
export const CHANGE_ACTIVE_SHEET = "CHANGE_ACTIVE_SHEET";
export const ADD_SHEET = "ADD_SHEET";
export const RECEIVE_START_CELL = "RECEIVE_START_CELL";
export const RECEIVE_END_CELL = "RECEIVE_END_CELL";
export const SELECTING_TEMP_CELL = "SELECTING_TEMP_CELL";
export const RESIZE_ROW = "RESIZE_ROW";
export const RESIZE_COL = "RESIZE_COL";

export const updateCell = (cell) => ({
  type: UPDATE_CELL,
  cell: cell
});

export const changeActiveSheet = (sheet) => ({
  type: CHANGE_ACTIVE_SHEET,
  activeSheet: sheet
});

export const addSheet = (sheetName) => ({
  type: ADD_SHEET,
  name: sheetName
});

export const receiveStartCell = (cell) => ({
  type: RECEIVE_START_CELL,
  cell: cell,
  selecting: true
});

export const receiveEndCell = (cell) => ({
  type: RECEIVE_END_CELL,
  cell: cell,
  selecting: false
});

export const tempEndCell = (cell) => ({
  type: SELECTING_TEMP_CELL,
  cell: cell
});

export const resizeRow = (rowId, height) => ({
  type: RESIZE_ROW,
  rowId,
  height
});

export const resizeCol = (colId, width) => ({
  type: RESIZE_COL,
  colId,
  width
});
