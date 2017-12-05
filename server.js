/*
 * server.js
 * entry point for reblock server
 *
 */

const express = require("express");

/* CONFIG */
const app = express();
app.set("port", process.env.PORT || 3000)

/* ROUTES */
const users = require("./routes/users");
const blocks = require("./routes/blocks");

app.use("/api/user/", users);
app.use("/api/block/", blocks);

/* START SERVER */
app.listen(app.get('port'), function() {
    console.log("Reblock server started on http://localhost:" + app.get('port'));
});

