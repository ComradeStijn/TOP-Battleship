import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { describe, test, expect, beforeAll, beforeEach } from "@jest/globals";

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
  })
});
