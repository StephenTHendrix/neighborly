// const Sequelize = require('sequelize')
// const db = {}
// require("dotenv").config();

// let sequelize;
// if (process.env.NODE_ENV === "development") {
//   sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   })
// }
// else if (process.env.NODE_ENV === "production") {
//   sequelize = new Sequelize("JAWSDB_URL", {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   })
// }

// db.sequelize = sequelize
// db.Sequelize = Sequelize
// // const db = require("./models");

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }
// // sync our sequelize models and then start server
// db.sequelize.sync().then(() => {
//   // inside our db sync callback, we start the server.
//   // this is our way of making sure the server is not listening
//   // to requests if we have not yet made a db connection
//   console.log("Synced")
// });

// module.exports = db
