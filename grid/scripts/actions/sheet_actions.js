export const UPDATE_CELL = "UPDATE_CELL";
export const CHANGE_ACTIVE_SHEET = "CHANGE_ACTIVE_SHEET";
export const ADD_SHEET = "ADD_SHEET";
export const RECEIVE_START_COORD = "RECEIVE_START_COORD";
export const RECEIVE_END_COORD = "RECEIVE_END_COORD";
export const SELECTING_TEMP_COORD = "SELECTING_TEMP_COORD";

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

export const receiveStartCoord = (cell) => ({
  type: RECEIVE_START_COORD,
  start: cell.coord,
  content: cell.content,
  selecting: true
});

export const receiveEndCoord = (coord) => ({
  type: RECEIVE_END_COORD,
  end: coord,
  selecting: false
});

export const tempEndCoord = (coord) => ({
  type: SELECTING_TEMP_COORD,
  end: coord
});
