const { users: db } = require('../db/repositories');
const { v4 } = require('uuid');

const addOne = async (body) => {
  const { name, email, password } = body;
  const id = v4();

  return await db.add(id, name, email, password);
};

const getOne = async (id) => {
  return await db.get(id);
};

const updateOne = async (id, userData) => {
  return await db.update(id, userData);
};

const deleteOne = async (id) => {
  return await db.del(id);
};

module.exports = { addOne, getOne, updateOne, deleteOne };
