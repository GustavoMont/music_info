import express from "express";
import "dotenv/config";
import db from "./database";
import GeneroRoute from "./Routes/genero";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  try {
    await db.authenticate();
    db.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Rotas ===========================

app.use("/generos", GeneroRoute);

app.listen(PORT, () => {
  console.log("Server is runing");
});
