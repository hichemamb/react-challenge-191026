const db = require('../config/db');

exports.getStudentsList = (req, res) => {
    db.users.findAll({
        attributes:['id','firstname','lastname','email','promotion'],
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
        attributes:['id','firstname','lastname','email','promotion'],
        include:[db.skills]
    })
    .then(users=>{
        res.json(users)
    })
};
