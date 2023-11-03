const { User } = require("./User");
const { Deck } = require("./Deck");
const { Card } = require("./Card");
const { Attack } = require("./Attack");
// import the rest of your models above

//set up the associations here
User.hasOne(Deck);
Deck.belongsTo(User);
Deck.hasMany(Card);
Card.belongsTo(Deck);
Card.belongsToMany(Attack, { through: "card-attack" });
Attack.belongsToMany(Card, { through: "card-attack" });

// and then export them all below
module.exports = {
  User,
  Deck,
  Card,
  Attack,
};
