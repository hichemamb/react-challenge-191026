const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
   host: env.DATABASE_HOST,
   dialect: env.DATABASE_DIALECT,
   define: {
      underscored: true
   }
});
