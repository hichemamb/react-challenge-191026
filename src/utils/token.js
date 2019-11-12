
const getToken = () => localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjgzNWQ5LWZiMGMtNDJkYi04YmYzLTU0MmJkOWJiNGZjYyIsImlhdCI6MTU3MzU2MDkwNCwiZXhwIjoxNjA1MTE3ODMwfQ.Mm6p8PdU-TeDVvwNnxdN8NCS3IGk9-il_5TEbyIk1qI';

exports.getToken = getToken;

exports.setToken = (newToken) => localStorage.setItem('token', JSON.stringify(newToken));

exports.decodeToken = () => {
    const { id } = require('jwt-decode')(getToken());
    return id;
};

exports.removeToken = () => localStorage.removeItem('token');