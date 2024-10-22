import { Gameboard } from "./gameboard";

export class Player {
  constructor(playable) {
    this.playable = playable === "pc";
    this.gameBoard = new Gameboard();
  }
}
