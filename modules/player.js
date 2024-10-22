import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(playable) {
    this.playable = playable === "pc";
    this.gameBoard = new Gameboard();
    this.placeAllShips();
  }

  placeAllShips() {
    let shipCount = 0;
    const shipSizes = [2, 3, 3, 4, 5];
    while (shipCount < 5) {
      const randomCoordinateX = Math.floor(Math.random() * 10);
      const randomCoordinateY = Math.floor(Math.random() * 10);
      const randomAxis = Math.round(Math.random()) === 0 ? "x" : "y";
      if (
        this.gameBoard.placeShip(
          randomCoordinateX,
          randomCoordinateY,
          shipSizes[shipCount],
          randomAxis
        )
      ) {
        shipCount++;
      }
    }
  }
}
