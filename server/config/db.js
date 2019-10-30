const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
   host: env.DATABASE_HOST,
   dialect: env.DATABASE_DIALECT,
   define: {
      underscored: true
   }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/users.js')(sequelize, Sequelize);
db.skills = require('../models/skills.js')(sequelize, Sequelize);

db.users.hasMany(db.skills);
db.skills.belongsTo(db.users);

module.exports = db;