export const RECEIVE_START_COORD = "RECEIVE_START_COORD";
export const RECEIVE_END_COORD = "RECEIVE_END_COORD";
export const SELECTING_TEMP_COORD = "SELECTING_TEMP_COORD";

export const receiveStartCoord = (coord) => ({
  type: RECEIVE_START_COORD,
  start: coord,
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
