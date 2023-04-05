// import sequelize from "./lib/db_connection.js"
import pg from "pg";
const { Pool } = pg;
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

//3.La especialidad tiene un código y una descripción


//Crear conexión
const sequelize = new Sequelize("postgres", "postgres", process.env.SUPABASE_PASS, {
  host: "db.uxukrikzkfreeoehhypg.supabase.co",
  dialect: "postgres",
});


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


class Especialidad extends Model { }
class Medico extends Model { }

Especialidad.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, { sequelize, modelName: 'Especialidad' });

// Crear tabla si no existe (no hacer nada si no existe)

Medico.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize, modelName: 'Medico' });

// Crear tabla si no existe (no hacer nada si no existe)

//Enlace tipo model
Especialidad.hasMany(Medico);
// Usuario.hasMany(Publicacion, { as: 'publicaciones' });
Medico.belongsTo(Especialidad);

await sequelize.sync({ force: true });

// Publicacion.belongsTo(Usuario, { as: 'usuario' });

/* Medico.findByPk(1, { include: '' })
  .then(Medico => {
    console.log(Medico.Especialidades);
  }); */
/* (async () => {
  await sequelize.sync({ force: false });
  console.log("Tablas creadas")
})();

Especialidad.belongsTo(Medico, {
  foreignKey: "id_medico"
});

Medico.hasMany(Especialidad, {
  foreignKey: "id_medico"
}); */


