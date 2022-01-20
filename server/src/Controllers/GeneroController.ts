import { Request, Response } from "express";
import GeneroModel from "../database/Models/Genero";
class GeneroController {
  async template(req: Request, res: Response) {}
  async getAll(req: Request, res: Response) {
    const generos = await GeneroModel.findAll({ order: [["id", "ASC"]] });
    return res.status(200).json(generos);
  }
  async insert(req: Request, res: Response) {
    const { nome } = req.body;
    try {
      const newGenero = await GeneroModel.create({ nome });
      return res.status(201).json(newGenero);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async update(req: Request, res: Response) {
    const { nome, id } = req.body;

    try {
      const updateGenero = await GeneroModel.update(
        { nome },
        { where: { id } }
      );
      return res
        .status(200)
        .json({ success: true, mesagge: "Genero atualizado com sucesso" });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new GeneroController();
