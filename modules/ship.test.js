import { Ship } from "./ship";
import {describe, test, expect} from "@jest/globals";

describe("Testing Ship class", () => {
  test("Hit function", () => {
    const testShip = new Ship(3);
    testShip.hit();
    expect(testShip.getHits()).toBe(1);
  })

  test("isSunk function", () => {
    const testShip = new Ship(2);
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  })
})