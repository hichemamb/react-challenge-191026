const { getToken } = require("./token");

exports.register = (userData) => {
   return fetch('http://localhost:3002/register', {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
   });
};

exports.login = (userData) => {
  return fetch('http://localhost:3002/login', {
     method: 'post',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(userData)
  });
};


//  const loginUser = userObj => ({
//    type: 'LOGIN_USER',
//    payload: userObj
// })
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

exports.uploadPicture= (formData) => {
   return fetch('http://localhost:8080/upload',{
      method: 'POST',
      body: formData,
   }).then(res => {
      return res.json();
   })
};