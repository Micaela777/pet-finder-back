import { User } from "./user";
import { Pet } from "./pets";
import { Auth } from "./auth";
import { Report } from "./reports";

User.hasMany(Pet)
Pet.belongsTo(User)

Pet.hasMany(Report)
Report.belongsTo(Pet)

export { User, Pet, Auth, Report }