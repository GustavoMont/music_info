import { Router } from "express";
import ArtistaController from "../Controllers/ArtistaController";
const ArtistaRoute = Router();

ArtistaRoute.get("/", ArtistaController.getAll);

ArtistaRoute.get("/:nome_genero", ArtistaController.getPerGenero);

ArtistaRoute.post("/add", ArtistaController.insert);

// ArtistaRoute.put("/update", ArtistaController.update);

export default ArtistaRoute;
