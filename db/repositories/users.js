const db = require('../db_postgres_pool');

const add = async (id, name, email, password) => {
  const user = await db.query(
    `INSERT INTO users (id, name, email, password) values ($1, $2, $3, $4) RETURNING *`,
    [id, name, email, password]
  );

  return user.rows[0];
};

const get = async (id) => {
  const user = await db.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return user.rows[0];
};

const update = async (id, userData) => {
  const { name, email, password } = userData;
  const user = await db.query(
    `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *`,
    [name, email, password, id]
  );

  return user.rows[0];
};

const del = async (id) => {
  const user = await db.query(`DELETE FROM users WHERE id = $1 RETURNING * `, [
    id,
  ]);
  return user.rows[0];
};

module.exports = {
  add,
  get,
  update,
  del,
};
