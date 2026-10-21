const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const garderie = {
  nom: "Ma Garderie",
  description: "Un environnement chaleureux pour apprendre, jouer et grandir.",
  adresse: "Tozeur, Tunisie",
  telephone: "+216 26 440 543"
};

const services = [
  { id: 1, nom: "Éveil éducatif", description: "Des activités adaptées à chaque âge." },
  { id: 2, nom: "Repas équilibrés", description: "Des repas variés et adaptés aux enfants." },
  { id: 3, nom: "Jeux créatifs", description: "Des ateliers artistiques et ludiques." }
];

const activites = [
  { id: 1, nom: "Dessin et peinture" },
  { id: 2, nom: "Musique et chansons" },
  { id: 3, nom: "Jeux en plein air" }
];

app.get('/api/garderie', (req, res) => res.json(garderie));
app.get('/api/services', (req, res) => res.json(services));
app.get('/api/activites', (req, res) => res.json(activites));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend démarré sur le port ${PORT}`);
});
