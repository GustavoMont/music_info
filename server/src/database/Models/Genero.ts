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
    nome: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { createdAt: false, updatedAt: false, timestamps: false }
);

export default GeneroModel;
