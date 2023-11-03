const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./index");
const { db } = require("../db/config");

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({
    name: "Slayer",
    mojo: 10,
    stamina: 5,
    imgUrl: "string",
  });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Card", () => {
  it("has a name", async () => {
    expect(card).toHaveProperty("name");
  });
  it("name is correct", async () => {
    expect(card.name).toBe("Slayer");
  });
  it("has mojo property", async () => {
    expect(card).toHaveProperty("mojo");
  });
  it("has stamina property", async () => {
    expect(card).toHaveProperty("stamina");
  });
  it("has an image", async () => {
    expect(card).toHaveProperty("imgUrl");
  });
});
