const bcrypt = require('bcrypt');
const saltRounds = 10;

// sync hash
exports.hashPw = password => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

//sync check
exports.checkPw = async (currentPw, hashPw) => {
    return bcrypt.compare(currentPw, hashPw);
};