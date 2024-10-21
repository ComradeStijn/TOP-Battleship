import { describe, test, expect, beforeEach } from "@jest/globals";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe("Gameboard initializing", () => {
  let testBoard;
  beforeEach(() => {
    testBoard = new Gameboard();
  });

  test("Gameboard exists", () => {
    expect(testBoard.gameBoard).not.toBeUndefined();
  });

  test("Can change and retrieve value of x,y coordinate", () => {
    testBoard.changeValueAtCoordinate(2, 3, "test");
    expect(testBoard.getStatusFromCoordinate(2, 3)).toBe("test");
  });

  test("Can retrieve value of x, y coordinate", () => {
    const expectedResult = {
      ship: null,
      filled: false,
      hit: false
    };
    expect(testBoard.getStatusFromCoordinate(0, 0)).toEqual(expectedResult);
  });
});

describe("Placing ships horizontally", () => {
  let testBoard;
  beforeEach(() => {
    testBoard = new Gameboard();
  });

  test("Ship is placed on 0,0 coordinate", () => {
    expect(testBoard.placeShip(0, 0, 3, "x")).toBe(true);
    expect(testBoard.getStatusFromCoordinate(0, 0).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(0, 0).ship).toBeInstanceOf(Ship);
  });

  test("Placed ship has correctly initialised its length", () => {
    testBoard.placeShip(0, 0, 3, "x");
    expect(testBoard.getStatusFromCoordinate(0, 0).ship.getLength()).toBe(3);
  });

  test("Placing ship horizontally works", () => {
    testBoard.placeShip(0, 0, 3, "x");

    expect(testBoard.getStatusFromCoordinate(0, 0).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(0, 1).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(0, 2).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(0, 3).filled).toBe(false);
  });

  test("If ship already present, do not place ship", () => {
    testBoard.changeValueAtCoordinate(0, 1, { filled: true });
    testBoard.placeShip(0, 0, 3, "x");
    expect(testBoard.getStatusFromCoordinate(0, 0).filled).toBe(false);
    expect(testBoard.placeShip(0, 0, 3, "x")).toBe(false);
  });

  test("If length exceeds boundary, do not place ship", () => {
    expect(testBoard.placeShip(0, 9, 1, "x")).toBe(true);
    expect(testBoard.placeShip(1, 9, 2, "x")).toBe(false);
    expect(testBoard.placeShip(2, 8, 2, "x")).toBe(true);
    expect(testBoard.placeShip(3, 8, 3, "x")).toBe(false);
  });
});

describe("Placing ships vertically", () => {
  let testBoard;
  beforeEach(() => {
    testBoard = new Gameboard();
  });

  test("Placing ship vertically works", () => {
    testBoard.placeShip(0, 0, 3, "y");

    expect(testBoard.getStatusFromCoordinate(0, 0).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(1, 0).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(2, 0).filled).toBe(true);
    expect(testBoard.getStatusFromCoordinate(3, 0).filled).toBe(false);
  });

  test("If ship already present, do not place ship", () => {
    testBoard.changeValueAtCoordinate(0, 1, { filled: true });
    testBoard.placeShip(0, 0, 3, "y");
    expect(testBoard.getStatusFromCoordinate(0, 0).filled).toBe(false);
    expect(testBoard.placeShip(0, 0, 3, "y")).toBe(false);
  });

  test("If length exceeds boundary, do not place ship", () => {
    expect(testBoard.placeShip(9, 0, 1, "y")).toBe(true);
    expect(testBoard.placeShip(9, 1, 2, "y")).toBe(false);
    expect(testBoard.placeShip(8, 2, 2, "y")).toBe(true);
    expect(testBoard.placeShip(8, 3, 3, "y")).toBe(false);
  });
});
