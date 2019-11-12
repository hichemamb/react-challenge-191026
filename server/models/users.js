module.exports = (sequelize, Sequelize) => {
   return sequelize.define('user', {
      id: {
         type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true,
      },
      picture: {
         type: Sequelize.STRING,
      },
      firstname: {
         type: Sequelize.STRING,
      },
      lastname: {
         type: Sequelize.STRING,
      },
      email: {
         type: Sequelize.STRING,
      },
      promotion: {
         type: Sequelize.STRING,
      },
      description: {
         type: Sequelize.STRING,
      },
      password: {
         type: Sequelize.STRING,
      },
   });
};

