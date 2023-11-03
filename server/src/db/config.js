// add your database connection here
const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "server/db.sqlite",
});

module.exports = {
  db,
  DataTypes,
};
