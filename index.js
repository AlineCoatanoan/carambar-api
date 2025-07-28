import express from "express";
import { jokeRoutes } from "./routes/jokeRoutes.js";
import { sequelize } from "./models/index.js";
import swaggerUi from "swagger-ui-express";
import cors from 'cors';
import fs from "fs";
import path from "path";
import { seedDatabase } from './seed.js';  // <-- Import

const app = express();

app.use(express.json());

app.use(cors());

const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve("./swagger.json"), "utf8"));

app.use("/api/v1", jokeRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

seedDatabase(sequelize, app, PORT);  
