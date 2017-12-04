/*
 * server.js
 * entry point for reblock server
 *
 */

const express = require("express");

/* CONFIG */
const app = express();
app.set('port', process.env.PORT || 3000)

/* ROUTES */
const user = require('./routes/users');

app.use('/api/user/', user)

/* START SERVER */
app.listen(app.get('port'), function() {
    console.log("Reblock server started on http://localhost:" + app.get('port'));
});

