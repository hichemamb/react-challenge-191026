const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
   host: env.DB_HOST,
   dialect: env.DB_DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/users.js')(sequelize, Sequelize);
db.skills = require('../models/skills.js')(sequelize, Sequelize);

db.users.hasMany(db.skills);
db.skills.belongsTo(db.users);

module.exports = db;