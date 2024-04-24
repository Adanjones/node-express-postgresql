const env = process .env.NODE_ENV || "dvelopment";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

module.exports = knex;