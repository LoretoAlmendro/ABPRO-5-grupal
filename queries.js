import { DataTypes } from "sequelize";
import sequelize from "./lib/db_connection.js";

const pacientes = sequelize.define("_paciente", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rut: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const consultas = sequelize.define("consulta", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  box: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync({ force: false });
  console.log("La(s) tabla(s) se han creado exitosamente");
})();

consultas.belongsTo(pacientes, {
  foreignKey: "id_paciente",
});
pacientes.hasMany(consultas, { foreignKey: "id_paciente" });
