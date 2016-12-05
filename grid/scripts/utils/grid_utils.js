export function getRowFromId(gridState, id) {

  return gridState[id];
}

export function getColFromId(gridState, id) {
  const col = [];

  for(let i = 0; i < gridState.length; i++) {
    col.push(gridState[i][id]);
  }

  return col;
}

export function getCellsBetween(gridState, start, end) {
  const upperBoundsCol = start.col > end.col ? start.col : end.col;
  const lowerBoundsCol = start.col < end.col ? start.col : end.col;

  const upperBoundsRow = start.row > end.row ? start.row : end.row;
  const lowerBoundsRow = start.row < end.row ? start.row : end.row;

  const cells = [];

  for(let i = lowerBoundsRow; i <= upperBoundsRow; i++) {
    const row = [];

    for(let j = lowerBoundsCol; j <= upperBoundsCol; j++) {
      row.push(gridState[i][j]);
    }

    cells.push(row);
  }

  return cells;
}

export function cellInSelection(rowId, colId, startVal, endVal) {
  return between(colId, startVal.col, endVal.col) && between(rowId, startVal.row, endVal.row)
}

export function between(cellCoord, startVal, endVal) {

  if(!$.isNumeric(cellCoord))
    return false;

  const upperBounds = startVal > endVal ? startVal : endVal;
  const lowerBounds = startVal < endVal ? startVal : endVal;

  if(cellCoord <= upperBounds && cellCoord >= lowerBounds)
    return true;

  return false;
}
export function newSheetName(taken) {
  let sheetId = 2;
  let testName = `Sheet${sheetId}`;
  while(taken.indexOf(testName) > -1) {
    sheetId++;
    testName = `Sheet${sheetId}`;
  }
  return testName;
}

export function blankSheet() {
    const grid = new Array(30);

    for(let i = 0; i < grid.length; i++) {
      grid[i] = new Array(26);
      for(let j = 0; j < grid[i].length; j++) {
        grid[i][j] = {
          content: "",
          width: 100,
          height: 26,
          selected: false,
          active: false,
          pos: {
            row: i,
            col: j
          }
        };
      }
    }

    grid[0][0].active = true;

    return grid;
  }

export const charToNum = function(alpha) {
    var index = 0
    for (var i = 0, j = 1; i < j; i++, j++) {
        if (alpha == numToChar(i)) {
            index = i;
            j = i;
        }
    }
}

export const numToChar = function(number) {
    var numeric = (number - 1) % 26;
    var letter = chr(65 + numeric);
    var number2 = parseInt((number - 1) / 26);
    if (number2 > 0) {
        return numToChar(number2) + letter;
    } else {
        return letter;
    }
}

const chr = function(codePt) {
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    }
    return String.fromCharCode(codePt);
}
