import { Ship } from "./ship.js";
const ROWS = 10;
const COLUMNS = 10;

export class Gameboard {
  constructor() {
    const emptyCell = () => ({
      ship: null,
      filled: false,
      hit: false,
    });
    this.gameBoard = Array(ROWS)
      .fill()
      .map(() => Array(COLUMNS).fill().map(emptyCell));
    this.ships = [];
  }

  changeValueAtCoordinate(x, y, value) {
    this.gameBoard[x][y] = value;
  }

  getStatusFromCoordinate(x, y) {
    return this.gameBoard[x][y];
  }

  placeShip(x, y, length, axis) {
    if (
      this.checkLengthInvalid(x, y, length, axis) ||
      this.checkShipExists(x, y, length, axis) ||
      !(axis == "x" || axis == "y")
    ) {
      return false;
    }

    const ship = new Ship(length);
    this.ships.push(ship);
    if (axis === "x") {
      for (let i = 0; i < length; i++) {
        this.gameBoard[x][y + i].ship = ship;
        this.gameBoard[x][y + i].filled = true;
      }
      return true;
    } else if (axis === "y") {
      for (let i = 0; i < length; i++) {
        this.gameBoard[x + i][y].ship = ship;
        this.gameBoard[x + i][y].filled = true;
      }
      return true;
    }
  }

  checkShipExists(x, y, length, axis) {
    if (axis === "x") {
      for (let i = 0; i < length; i++) {
        if (this.gameBoard[x][y + i].filled === true) {
          return true;
        }
      }
      return false;
    } else if (axis === "y") {
      for (let i = 0; i < length; i++) {
        if (this.gameBoard[x + i][y].filled === true) {
          return true;
        }
      }
      return false;
    } else {
      throw new Error("Error with checkShipExists function in gameboard.js");
    }
  }

  checkLengthInvalid(x, y, length, axis) {
    if (axis === "x") {
      return y + length > COLUMNS;
    } else if (axis === "y") {
      return x + length > ROWS;
    } else {
      throw new Error("Error with checkLengthInvalid function in gameboard.js");
    }
  }

  receiveAttack(x, y) {
    if (
      this.gameBoard[x][y].hit === true ||
      this.gameBoard[x][y].filled === false
    ) {
      return false;
    }
    this.gameBoard[x][y].hit = true;
    this.gameBoard[x][y]["ship"].hit();
    return true;
  }

  gameEnd() {
    let status = true;
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        status = false;
        break
      }
    }
    return status;
  }
}

