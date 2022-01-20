import { Router } from "express";
import GeneroController from "../Controllers/GeneroController";

const GeneroRoute = Router();

GeneroRoute.get("/", GeneroController.getAll);

GeneroRoute.post("/add", GeneroController.insert);

GeneroRoute.put("/update", GeneroController.update);

export default GeneroRoute;
