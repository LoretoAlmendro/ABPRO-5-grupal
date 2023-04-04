import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  "postgres",
  "postgres",
  process.env.SUPABASE_PASS,
  {
    host: "db.uxukrikzkfreeoehhypg.supabase.co",
    dialect: "postgres",
  }
);

export default sequelize;
