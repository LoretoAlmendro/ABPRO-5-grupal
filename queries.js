import pool from "./lib/db_connection.js";
import pg from "pg";
const { Pool } = pg;
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
import { Sequelize, DataTypes, Model } from "sequelize";
import dotenv from "dotenv";

// Datos iniciales de la base de datos
const sequelize = new Sequelize("postgres", "postgres", process.env.SUPABASE_PASS, {
  host: "db.uxukrikzkfreeoehhypg.supabase.co",
  dialect: "postgres",
});

// Revisar si la conexión se establece correctamente
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Clase extiende del modelo 
class Pacientes extends Model {}
class Licencias extends Model {}
class Medicos extends Model {}

// Nombre de la tabla y sus campos
Pacientes.init({ 
    nombre: {type: DataTypes.STRING, allowNull: false}, 
    rut: {type: DataTypes.STRING },
    direccion: {type: DataTypes.STRING }},
    { sequelize, modelName: 'Pacientes' });

Licencias.init({ 
  codigo: { type: DataTypes.INTEGER, allowNull: false }, 
  diagnostico: { type: DataTypes.STRING },
  fechaInicio: { type: DataTypes.DATE },
  fechaTermino: { type: DataTypes.DATE }},
  { sequelize, modelName: 'Licencias' });

Medicos.init({ 
  nombre: {type: DataTypes.STRING, allowNull: false}, 
  rut: {type: DataTypes.STRING },
  direccion: {type: DataTypes.STRING }},
  { sequelize, modelName: 'Medicos' });


// Retorna el modelo
console.log(Pacientes === sequelize.models.Pacientes);

// Crear tabla si no existe (no hacer nada si existe)
await Pacientes.sync();
await Licencias.sync();
await Medicos.sync();