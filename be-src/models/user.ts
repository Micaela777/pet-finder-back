import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conn"


export class User extends Model {}
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
    
  },{
    sequelize,
    modelName: "user"
  })
