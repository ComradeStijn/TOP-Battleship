import { Ship } from "./ship.js"

export class Gameboard {
  constructor() {
    const rows = 10;
    const columns = 10;
    const emptyCell = {
      ship: null,
      filled: false
    }
    this.gameBoard = Array(rows)
      .fill()
      .map(() => Array(columns).fill(emptyCell));
  }

  changeValueAtCoordinate(x, y, value) {
    this.gameBoard[x][y] = value;
  }

  getStatusFromCoordinate(x, y) {
    return this.gameBoard[x][y];
  }
}

