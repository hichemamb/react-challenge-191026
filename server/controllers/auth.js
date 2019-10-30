const db = require('../config/db');

exports.register = async (req, res) => {
   const userInfos = req.body;
   db.users.create({
      firstname: userInfos.firstname,
      lastname: userInfos.lastname,
      email: userInfos.email,
      promotion: userInfos.promotion,
      description: userInfos.description,
      password: userInfos.password,
      skills: userInfos.skills
   }, {
      include: [db.skills]
   }).then(data => res.send(data));
};