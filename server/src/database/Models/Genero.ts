import { DataTypes } from "sequelize";
import db from "..";

const GeneroModel = db.define(
  "genero",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
  },
  { createdAt: false, updatedAt: false, timestamps: false }
);

export default GeneroModel;
