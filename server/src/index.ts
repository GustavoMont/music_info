import express from "express";
import "dotenv/config";
import db from "./database";
import GeneroRoute from "./Routes/genero";
import ArtistaRoute from "./Routes/artista";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  try {
    await db.authenticate({ logging: false });
    db.sync({ logging: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Rotas ===========================

app.use("/generos", GeneroRoute);
app.use("/artistas", ArtistaRoute);

app.listen(PORT, () => {
  console.log("Server is runing");
});
