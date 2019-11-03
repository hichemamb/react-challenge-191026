const db = require('../config/db');
const jwt = require('jsonwebtoken');
const env = require('../config/env');
const { hashPw } = require('../config/crypt');
exports.register = (req, res) => {

   const {firstname, lastname, email, promotion, description, password, skills} = req.body;

   if (!email || !password || !firstname || !lastname) {
      res.send('Invalid details');
   } else {
      db.users.findOne({where: {email}})
      .then(user => {
         if (user === null) {
               db.users.create({
                  firstname,
                  lastname,
                  email,
                  promotion,
                  description,
                  password:hashPw(password),
                  skills,
               }, {
                  include: [db.skills]
               })
                  .then(user => res.send(user))
                  .catch((err) => {
                     console.log('Failed to inserted data');
                     console.log(err);
                  });
            } else {
               res.send('User with same email already exist');
            }
         });
   }
};

exports.login = (req, res) => {

   const {email, password} = req.body;

   if (!email || !password) {
      res.send('Invalid details');
   } else {
      db.users.findOne({where: {email}})
         .then(user => {
               if (user !== null && user.email === email && user.password === password) {
                  const payload = {
                     id: user.id
                  };

                  jwt.sign(payload, env.SECRET_OR_KEY, {expiresIn: 31556926}, (err, token) => {
                     res.json({success: true, token: token});
                  });

               } else {
                  res.status(400).json({incorrect: 'Incorrect email or password, retry'})
                  ;
               }
            }
         );
   }
};