const db = require('../config/db');

exports.getUserInfos = (req, res) => {
   const {id} = req.body;
   db.users.findOne({where: {id}, include: [db.skills]})
      .then(user => {
         res.json(user);
      });
};
