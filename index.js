import express from "express";
import { jokeRoutes } from "./routes/jokeRoutes.js";
import { sequelize } from "./models/index.js";
import swaggerUi from "swagger-ui-express";
import cors from 'cors';
import fs from "fs";
import path from "path";

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['https://alinecoatanoan.github.io/carambar-front']
}));

const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve("./swagger.json"), "utf8"));

app.use("/api/v1", jokeRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("✅ Base de données synchronisée");
    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur lors de la synchronisation de la BDD :", err);
  });
