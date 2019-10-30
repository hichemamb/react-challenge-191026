module.exports = (sequelize, Sequelize) => {
   return sequelize.define('skill', {
      id: {
         type: Sequelize.UUID,
         primaryKey: true,
      },
      user_id: {
         type: Sequelize.UUID,
      },
      skill: {
         type: Sequelize.STRING,
      },
      mark: {
         type: Sequelize.STRING
      }
   });
};