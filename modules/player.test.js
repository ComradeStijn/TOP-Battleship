import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { describe, test, expect, beforeEach } from "@jest/globals";

describe("Player initializing", () => {
  let testPlayer
  beforeEach(() => {
    testPlayer = new Player("pc");
  })

  test("Player class initializes correctly", () => {
    expect(testPlayer).toBeInstanceOf(Player);
  });

  test("Playable field works", () => {
    expect(testPlayer.playable).toBe(true);
    const testComputer = new Player("npc");
    expect(testComputer.playable).toBe(false);
  });

  test("Each player has a gameboard",() => {
    expect(testPlayer.gameBoard).toBeInstanceOf(Gameboard);
  });

  test("Each player's gameboard has 5 ships", () => {
    expect(testPlayer.gameBoard.ships.length).toBe(5);
  });

  test("Each player's gameboard has 5 ships with length 2, 3, 3, 4, 5", () => {
    const comparison = [2, 3, 3, 4, 5];
    const shipsArray = testPlayer.gameBoard.ships;
    const shipLengths = shipsArray.map((ship) => ship.getLength()).sort();
    expect(shipLengths).toEqual(comparison);
  })
});
