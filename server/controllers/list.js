const db = require('../config/db');

exports.getStudentsList = (req, res) => {
    db.users.findAll({
        attributes:['id', 'picture', 'firstname','lastname','email','promotion', 'description'],
        include:[db.skills]
    })
    .then(users=>{
        res.json(users)
    })
};

exports.getStudentById = (req, res) => {
    const {id} = req.params;
    db.users.findOne({
        where:{id},
        attributes:['id', 'picture', 'firstname','lastname','email','promotion', 'description'],
        include:[db.skills]
    })
    .then(users=>{
        res.json(users)
    })
};
