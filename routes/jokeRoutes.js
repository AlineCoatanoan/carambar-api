import express from "express";
import { getAllJokes, getJokeById, getRandomJoke, createJoke } from "../controllers/jokeController.js";

const router = express.Router();

router.get("/jokes", getAllJokes);
router.get("/jokes/random", getRandomJoke);
router.get("/jokes/:id", getJokeById);
router.post("/jokes", createJoke);

export { router as jokeRoutes };