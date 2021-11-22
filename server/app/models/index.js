const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

//db.url = dbConfig.url;
db.owners = require("./owner.model.js")(mongoose);

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["student", "admin", "owner"];

module.exports = db;