const db = require('../config/db');

exports.getStudentsList = (req, res) => {
    db.users.findAll({
        attributes:['id','firstname','lastname','email','promotion']
    })
    .then(users=>{
        res.json(users)
    })
};
