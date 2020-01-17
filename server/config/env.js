module.exports = {
   PORT: process.env.PORT || 8080,
   DB_NAME: process.env.DB_NAME || 'challenge_hetic_list',
   DB_USERNAME: process.env.DB_USER || 'root',
   DB_PASSWORD: process.env.DB_PASSWORD || 'password',
   DB_HOST: process.env.DB_HOST || 'localhost',
   DB_DIALECT: 'mysql',
   SECRET_OR_KEY: 'hichkey'
};