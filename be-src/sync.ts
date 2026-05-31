import { sequelize } from "./models/conn";

sequelize.sync();

// sequelize.sync({ alter: true });