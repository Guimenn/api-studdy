import pkg from 'pg';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: {
    rejectUnauthorized: false
  }
});

// Adiciona um handler de erro para o pool
pool.on('error', (err) => {
  console.error('Erro inesperado no pool de conexões:', err);
});

async function readAll(table, where = null) {
  let sql = `SELECT * FROM ${table}`;
  if (where) {
    sql += ` WHERE ${where}`;
  }
  try {
    const { rows } = await pool.query(sql);
    return rows;
  } catch (err) {
    console.error('Erro ao ler registros: ', err);
    throw err;
  }
}

async function read(table, where) {
  let sql = `SELECT * FROM ${table}`;
  if (where) {
    sql += ` WHERE ${where}`;
  }
  try {
    const { rows } = await pool.query(sql);
    return rows[0] || null;
  } catch (err) {
    console.error('Erro ao ler registro: ', err);
    throw err;
  }
}

async function create(table, data) {
  const client = await pool.connect();
  try {
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data)
      .map((_, i) => `$${i + 1}`)
      .join(', ');

    const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING id`;

    const values = Object.values(data);

    const { rows } = await client.query(sql, values);

    return rows[0].id;
  } catch (err) {
    console.error('Erro ao inserir registro: ', err);
    throw err;
  } finally {
    client.release();
  }
}

async function update(table, data, where) {
  const client = await pool.connect();
  try {
    const set = Object.keys(data)
      .map((column, i) => `${column} = $${i + 1}`)
      .join(', ');

    const sql = `UPDATE ${table} SET ${set} WHERE ${where}`;

    const values = Object.values(data);

    const result = await client.query(sql, values);

    return result.rowCount;
  } catch (err) {
    console.error('Erro ao atualizar registro: ', err);
    throw err;
  } finally {
    client.release();
  }
}

async function deleteRecord(table, where) {
  const client = await pool.connect();
  try {
    const sql = `DELETE FROM ${table} WHERE ${where}`;

    const result = await client.query(sql);

    return result.rowCount;
  } catch (err) {
    console.error('Erro ao excluir registro: ', err);
    throw err;
  } finally {
    client.release();
  }
}

async function compare(senha, hash) {
  try {
    return await bcrypt.compare(senha, hash);
  } catch (error) {
    console.error('Erro ao comparar a senha com o hash', error);
    return false;
  }
}

export {
  create,
  readAll,
  read,
  update,
  deleteRecord,
  compare,
};
