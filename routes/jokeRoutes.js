import express from "express";
import { getAllJokes, getJokeById, getRandomJoke, createJoke } from "../controllers/jokeController.js";

export const jokeRoutes = express.Router();

jokeRoutes.get("/jokes", getAllJokes);
jokeRoutes.get("/jokes/random", getRandomJoke);
jokeRoutes.get("/jokes/:id", getJokeById);
jokeRoutes.post("/jokes", createJoke);