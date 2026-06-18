import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conn";


export class Pet extends Model {}
  Pet.init({
    name: DataTypes.STRING,
    pictureURL: DataTypes.STRING,
    location: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    found: DataTypes.BOOLEAN
  },{
    sequelize,
    modelName: "pet"
  })