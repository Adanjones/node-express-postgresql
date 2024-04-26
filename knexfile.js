const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      user : 'dev_jn4u_user',
      password : '32k9f7xYVWQL9yy6tEkRVxU9d6t7JGuF',
      database : 'thinkful_books'
  },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};