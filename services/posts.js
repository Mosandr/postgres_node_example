const { posts: db } = require('../db/repositories');
const { v4 } = require('uuid');

const addOne = async (body) => {
  //   const { name, email, password } = body;
  //   const id = v4();
  //   return await db.add(id, name, email, password);
};

const getAll = async () => {
  //   return await db.get(id);
};

const getOne = async (id) => {
  //   return await db.get(id);
};

const updateOne = async (id, body) => {
  //   const { name, email, password } = body;
  //   const id = v4();
  //   return await db.add(id, name, email, password);
};

const deleteOne = async (id) => {
  //   const { name, email, password } = body;
  //   const id = v4();
  //   return await db.add(id, name, email, password);
};

module.exports = { addOne, getOne, getAll, updateOne, deleteOne };
