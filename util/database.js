const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "TranThanhD@t09", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
