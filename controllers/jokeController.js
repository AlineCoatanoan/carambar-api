import { Joke } from "../models/index.js";

export const createJoke = async (req, res) => {
  try {
    const { content } = req.body;
    const joke = await Joke.create({ content });
    res.status(201).json(joke);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: "Blague pas trouvée" });
    }
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset: randomIndex });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
