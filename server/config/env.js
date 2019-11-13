module.exports = {
   PORT: process.env.PORT || 3000,
   DB_NAME: process.env.DB_NAME || 'challenge_hetic_list',
   DB_USERNAME: process.env.DB_USER || 'user',
   DB_PASSWORD: process.env.DB_PASSWORD || 'pass',
   DB_HOST: process.env.DB_HOST || 'localhost',
   DB_DIALECT: 'mysql',
   SECRET_OR_KEY: 'hichkey'
};