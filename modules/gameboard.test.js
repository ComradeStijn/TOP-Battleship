import { describe, test, expect } from "@jest/globals";
import { Gameboard } from "./gameboard";

describe("Gameboard initializing", () => {
  test("Gameboard exists", () => {
    const testBoard = new Gameboard();
    expect(testBoard.gameBoard).not.toBeUndefined();
  });

  test("Can change and retrieve value of x,y coordinate", () => {
    const testBoard = new Gameboard();
    testBoard.changeValueAtCoordinate(2, 3, "test");
    expect(testBoard.getStatusFromCoordinate(2, 3)).toBe("test");
  });

  test("Can retrieve value of x, y coordinate", () => {
    const testBoard = new Gameboard();
    const expectedResult = {
      ship: null,
      filled: false,
    }
    expect(testBoard.getStatusFromCoordinate(0, 0)).toEqual(expectedResult);
  })
});


