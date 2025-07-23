import { Sequelize } from "sequelize";
import { Joke as JokeModel } from "./joke.js";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

export const Joke = JokeModel.initModel(sequelize);
