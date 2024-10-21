export class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }

  getLength() {
    return this.#length;
  }

  getHits() {
    return this.#hits;
  }

  hit() {
    this.#hits++;
  }

  isSunk() {
    return this.#hits === this.#length;
  }
}
