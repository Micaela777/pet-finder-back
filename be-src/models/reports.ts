import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conn"


export class Report extends Model {}
  Report.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.STRING,
    pet_id: DataTypes.INTEGER
  },{
    sequelize,
    modelName: "report"
  })