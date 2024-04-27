const knex = require("../db/connection");

function create(supplier) {
  return knew("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  create,
}