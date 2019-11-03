const db = require('../config/db');

exports.getUserInfos = (req, res) => {
   const {id} = req.body
   db.users.findOne({where: {id}, include: [db.skills]})
      .then(user => {
         res.json(user);
      });
};

exports.putUserInfos = (req, res) => {
   const {id} = req.body;
   db.users.findOne({where: {id}, include: [db.skills]})
      .then(user => { 
         const parametersBody = Object.keys(req.body);
         const parametersUser = Object.keys(user.dataValues);
         // check if all keys exist
         const everyKeysAreOk = parametersBody.every( p => parametersUser.includes(p))
         try {
            if(!everyKeysAreOk){
               throw "parameters invalid, please retry"
            }
            user.update(req.body)
               .then(updateUser =>{
                  res.json(updateUser)
               })
               .catch(error =>{
                  res.status(400).json({incorrect: 'error update, please retry',error})
               })
         }
         catch(err){
            const listKeysUndefined = parametersBody.filter( p => !parametersUser.includes(p))
            res.status(400).json({incorrect: err, error:`this element(s) is/are undefined: ${listKeysUndefined.join(' && ')}`})
         }
      })
      .catch(error=>{
         res.status(400).json({incorrect: 'unknown id, please retry',error})
      })
};