import { Sequelize } from "sequelize";
import { Joke } from "./Joke.js";

// initialise la connexion avec SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", 
  logging: false,
});

Joke.initModel(sequelize);

export { sequelize, Joke };
