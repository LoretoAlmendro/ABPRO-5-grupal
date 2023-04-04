import pool from "./lib/db_connection.js";
import pg from "pg";
const { Pool } = pg;
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'HuC4-rV.PV6qr!6', {
    host: 'db.uxukrikzkfreeoehhypg.supabase.co',
    dialect: 'postgres'
});





import dotenv from "dotenv";

//dotenv.config();

/* yargs.option({
    d: { demandOption: false, alias: "descripcion" },
    f: { demandOption: false, alias: "fecha" },
    m: { demandOption: false, alias: "monto" },
    c: { demandOption: false, alias: "cuenta" },
});

const params = yargs.argv; */

//pool.connect();
console.log("holi")