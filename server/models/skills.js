module.exports = (sequelize, Sequelize) => {
   return sequelize.define('skill', {
      skill: {
         type: Sequelize.STRING,
      },
      mark: {
         type: Sequelize.STRING
      }
   });
};