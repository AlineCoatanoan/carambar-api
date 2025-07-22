import { sequelize } from "./models/index.js";
import { Joke } from "./models/joke.js";

const jokesData = [
  { content: "Quelle est la femelle du hamster ? L’Amsterdam" },
  { content: "Que dit un oignon quand il se cogne ? Aïe" },
  { content: "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette." },
  { content: "Pourquoi le football c'est rigolo ? Parce que Thierry en rit" },
  { content: "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
  { content: "Que se fait un Schtroumpf quand il tombe ? Un Bleu" },
  { content: "Quel est le comble pour un marin ? Avoir le nez qui coule" },
  { content: "Qu'est ce que les enfants usent le plus à l'école ? Le professeur" },
  { content: "Quel est le sport le plus silencieux ? Le para-chuuuut" },
  { content: "Quel est le comble pour un joueur de bowling ? C’est de perdre la boule" }
];

async function seed() {
  try {
    await sequelize.sync({ force: true }); 
    console.log("✅ Base de données synchronisée");

    for (const joke of jokesData) {
      await Joke.create(joke);
    }

    console.log("🎉 Blagues insérées avec succès !");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur lors du seed :", error);
    process.exit(1);
  }
}

seed();
