const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { sequelize } = require("../db/config");
const { User, Deck } = require("./index");

let user;
let deck;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  user = await User.create({
    username: "testusername",
  });
  deck = await Deck.create({
    name: "Test Deck",
    xp: 100,
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("User/Deck Association", () => {
  it("should create a User and associate it with a Deck", async () => {
    await user.setDeck(deck);
    const associatedDeck = await user.getDeck();
    expect(associatedDeck.id).toBe(deck.id);
  });
});
