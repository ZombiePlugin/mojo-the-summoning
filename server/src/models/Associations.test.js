const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { db } = require("../db/config");
const { User, Deck, Card, Attack } = require("./index");
const { seed } = require("../db/seed");

let user;
let deck;
let card;
let attack;

beforeAll(async () => {
  await seed();
});

describe("User/Deck Association", () => {
  it("Associate a User with a Deck", async () => {
    user = await User.findByPk(1);
    deck = await Deck.findByPk(1);
    await user.setDeck(deck);
    const associatedDeck = await user.getDeck();
    expect(associatedDeck.id).toBe(deck.id);
  });
});
describe("Deck/Card Association", () => {
  it("Associate multiple cards with one Deck", async () => {
    deck = await Deck.findByPk(1);
    const card1 = await Card.findByPk(1);
    const card2 = await Card.findByPk(2);
    await deck.setCards([card1, card2]);
    const associatedCards = await deck.getCards();
    expect(associatedCards.length).toBe(2);
  });
});
describe("Attack/Card Association", () => {
  it("should associate Card with Attack", async () => {
    const card = await Card.create({
      name: "testCard",
      mojo: 5,
      stamina: 10,
      imgUrl: "testImage.png",
    });
    const attack = await Attack.create({
      title: "testAttack",
      mojoCost: 3,
      staminaCost: 5,
    });

    await card.addAttack(attack);
    const cardWithAttacks = await Card.findOne({
      where: { id: card.id },
      include: Attack,
    });

    expect(cardWithAttacks.Attacks[0].id).toBe(attack.id);
  });
});
