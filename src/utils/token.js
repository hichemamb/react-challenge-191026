
const getToken = () => localStorage.getItem('token') || false;
exports.getToken = getToken;

exports.setToken = (newToken) => localStorage.setItem('token', JSON.stringify(newToken));

exports.decodeToken = () => {
    const { id } = require('jwt-decode')(getToken());
    return id;
};

exports.removeToken = () => localStorage.removeItem('token');