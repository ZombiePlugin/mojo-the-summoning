const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("./index");
const { db } = require("../db/config");

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: "Slash",
    mojoCost: 2,
    staminaCost: 1,
  });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Attack", () => {
  it("has a title", async () => {
    expect(attack).toHaveProperty("title");
  });
  it("title is correct", async () => {
    expect(attack.title).toBe("Slash");
  });
  it("has mojoCost property", async () => {
    expect(attack).toHaveProperty("mojoCost");
  });
  it("mojoCost is correct", async () => {
    expect(attack.mojoCost).toBe(2);
  });
  it("has staminaCost property", async () => {
    expect(attack).toHaveProperty("staminaCost");
  });
  it("staminaCost is correct", async () => {
    expect(attack.staminaCost).toBe(1);
  });
});
