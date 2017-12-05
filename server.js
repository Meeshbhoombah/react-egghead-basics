/*
 * server.js
 * entry point for reblock server
 *
 */

const express = require("express");
const Sequelize = require("sequelize");

/* CONFIG */
const app = express();
app.set("port", process.env.PORT || 3000)

/* ROUTES */
const users = require("./routes/users");
const blocks = require("./routes/blocks");

app.use("/api/user/", users);
app.use("/api/block/", blocks);

/* CONNECT TO DB */
const sequelize = new Sequelize("reblock_dev", "rohan", null, { dialect: "postgres" });

sequelize
  .authenticate()
  .then(() => {
    console.log("**** established db connection ****");
  })
  .catch(err => {
    console.error("Could not connect to database: ", err);
  });

/* START SERVER */
app.listen(app.get("port"), function() {
    console.log("reblock server started on http://localhost:" + app.get("port"));
});

