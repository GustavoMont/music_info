import { DataTypes } from "sequelize";
import db from "..";
import GeneroModel from "./Genero";

const ArtistaModel = db.define(
  "artistas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    nacionalidade: DataTypes.STRING,
    maior_hit: DataTypes.STRING,
    image_url: DataTypes.STRING
  },
  { createdAt: false, updatedAt: false, timestamps: false, underscored: true }
);

ArtistaModel.belongsTo(GeneroModel, { foreignKey: "genero_id" });

export default ArtistaModel;
