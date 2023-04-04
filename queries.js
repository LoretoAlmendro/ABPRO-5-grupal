import pool from "./lib/db_connection.js";
import pg from "pg";
const { Pool } = pg;
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
import { Sequelize, DataTypes, Model } from "sequelize";
import dotenv from "dotenv";

const sequelize = new Sequelize("postgres", "postgres", "HuC4-rV.PV6qr!6", {
  host: "db.uxukrikzkfreeoehhypg.supabase.co",
  dialect: "postgres",
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


//Clase extiende del modelo 
class Pacientes extends Model {}

//Definir nombre de la tabla y sus campos
Pacientes.init({ 
    nombre: {type: DataTypes.STRING, allowNull: false}, 
    rut: {type: DataTypes.STRING },
    direccion: {type: DataTypes.STRING }},
    { sequelize, modelName: 'Pacientes' });

// `sequelize.define` retorna el modelo 
console.log(Pacientes === sequelize.models.Pacientes);

await Pacientes.sync();