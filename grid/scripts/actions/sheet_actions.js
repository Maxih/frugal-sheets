export const UPDATE_CELL = "UPDATE_CELL";
export const CHANGE_ACTIVE_SHEET = "CHANGE_ACTIVE_SHEET";
export const ADD_SHEET = "ADD_SHEET";

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
