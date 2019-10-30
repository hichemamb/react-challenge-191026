const db = require('../config/db');

exports.register = async (req, res) => {
   const {firstname, lastname, email, promotion, description, password, skills} = req.body;
   db.users.create({
      firstname,
      lastname,
      email,
      promotion,
      description,
      password,
      skills,
   }, {
      include: [db.skills]
   }).then(data => res.send(data));
};