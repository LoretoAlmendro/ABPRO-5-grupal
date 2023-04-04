import pool from "./lib/db_connection.js";
import pg from "pg";
const { Pool } = pg;
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
import dotenv from "dotenv";
//dotenv.config();

// Datos iniciales de la base de datos
const sequelize = new Sequelize("postgres", "postgres", "HuC4-rV.PV6qr!6", {
  host: "db.uxukrikzkfreeoehhypg.supabase.co",
  dialect: "postgres",
});

// Revisar si la conexión se establece correctamente
const params = yargs.argv;


// Clase extiende del modelo 
class Pacientes extends Model {}
class Licencias extends Model {}


// Nombre de la tabla y sus campos
Pacientes.init({
  nombre: { type: DataTypes.STRING, allowNull: false },
  rut: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING }
},
  { sequelize, modelName: 'Pacientes' });

Licencias.init({ 
  codigo: { type: DataTypes.INTEGER, allowNull: false }, 
  diagnostico: { type: DataTypes.STRING },
  fechaInicio: { type: DataTypes.DATE },
  fechaTermino: { type: DataTypes.DATE }},
  { sequelize, modelName: 'Licencias' });

// Retorna el modelo
console.log(Pacientes === sequelize.models.Pacientes);

// Crear tabla si no existe (no hacer nada si no existe)
await Pacientes.sync();

await Licencias.sync();

