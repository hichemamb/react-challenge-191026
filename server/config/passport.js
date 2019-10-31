const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../config/db');
const env = require('./env');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = env.SECRET_OR_KEY;

module.exports = passport => {
   passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      db.users.findOne({where: {id: jwt_payload.id}})
         .then(user => {
            if (user) {
               return done(null, user);
            } else {
               return done(null, false);
            }
         })
         .catch(err => console.log(err))
   }));
};