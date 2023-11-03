const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./index");
const { db } = require("../db/config");

// define in global scope
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "Primary", xp: 0 });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Deck", () => {
  it("has a name", async () => {
    expect(deck).toHaveProperty("name");
  });
  it("name is correct", async () => {
    expect(deck.name).toBe("Primary");
  });
  it("has xp property", async () => {
    expect(deck).toHaveProperty("xp");
  });
});
