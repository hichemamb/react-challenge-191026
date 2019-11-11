const { getToken } = require("./token");

exports.register = (userData) => {
   return fetch('http://localhost:8080/register', {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
   });
};

exports.studentsList = () => {
   return fetch('http://localhost:8080/list', {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + getToken()
      },
   }).then(res => {
      return res.json();
   }).catch(err => {
      console.log(err)
   });
};