const db = require('../config/db');
const jwt = require('jsonwebtoken');
const env = require('../config/env');
const {hashPw, checkPw} = require('../config/crypt');
exports.register = (req, res) => {

   const {firstname, lastname, email, promotion, description, password, skills} = req.body;

   if (!email || !password || !firstname || !lastname) {
      res.send('Invalid details');
   } else {
      return db.sequelize.transaction(t => {
         return db.users.findOne({where: {email}}, {transaction: t}).then(user => {
            if (user === null) {
               return db.users.create({
                  firstname,
                  lastname,
                  email,
                  promotion,
                  description,
                  password: hashPw(password),
                  skills,
               }, {
                  include: [db.skills],
                  transaction: t
               });
            } else {
               res.send('User with same email already exist');
            }
         });
      }).then(user => res.send(user))
         .catch((err) => {
            res.send(`SQL err: ${err}`);
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
               if (user !== null && user.email === email && checkPw(password, user.password)) {
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