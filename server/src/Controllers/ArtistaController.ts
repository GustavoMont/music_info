import { Request, Response } from "express";
import ArtistaModel from "../database/Models/Artistas";
import GeneroModel from "../database/Models/Genero";

class ArtistaController {
  async getAll(req: Request, res: Response) {
    const artistas = await ArtistaModel.findAll({
      attributes: { exclude: ["genero_id"] },
      include: [{ model: GeneroModel }],
    });
    return res.status(200).json(artistas);
  }
  async getPerGenero(req: Request, res: Response) {
    const { ["nome_genero"]: genNome } = req.params;
    const artistas = await ArtistaModel.findAll({
      include: [
        {
          model: GeneroModel,
          where: {
            nome: genNome,
          },
        },
      ],
    });
    if (artistas.length === 0) {
      res
        .status(204)
        .json({ message: "Nenhum artista desse estilo foi cadatrado" });
      return;
    }
    res.status(200).json(artistas);
  }
  async insert(req: Request, res: Response) {
    const { nome, nacionalidade, maior_hit, genero_id, image_url } = req.body;
    if (!genero_id) {
      res
        .status(403)
        .json({ erro: true, message: "É preciso dizer o genêro musical" });
      return;
    }
    try {
      const newArtista = await ArtistaModel.create({
        nome,
        nacionalidade,
        maior_hit,
        image_url,
        genero_id,
      });
      res.status(200).json(newArtista);
    } catch (error) {
      res.json(400).json(error);
    }
  }
  async update(req: Request, res: Response) {
    const { id, ...info } = req.body;

    try {
      const updateArtista = await ArtistaModel.update(
        { ...info },
        { where: { id } }
      );
      if (updateArtista[0] !== 1) {
        return res
          .status(400)
          .json({
            erro: true,
            message: "Houve um erro ao atualizar informações",
          });
      }
      return res
        .status(200)
        .json({ message: "Informações atualizadas com Sucesso" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  // async template(req: Request, res: Response) {}
}

export default new ArtistaController();
