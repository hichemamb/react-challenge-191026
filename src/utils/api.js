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

exports.getStudentById = (id) => {
   return fetch('http://localhost:8080/list/' + id, {
      method: 'GET',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + getToken()
      }
   }).then(res => {
      return res.json();
   })
};

exports.uploadPicture = (formData) => {
   return fetch('http://localhost:8080/upload', {
      method: 'POST',
      body: formData,
   }).then(res => {
      return res.json();
   })
};