const { getToken } = require("./token");
const URL = config.url.BACKEND_URL;

exports.register = (userData) => {
   return fetch(`${URL}/register`, {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
   });
};

exports.studentsList = () => {
   return fetch(`${URL}/list`, {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${JSON.parse(getToken())}`
      },
   }).then(res => {
      return res.json();
   }).catch(err => {
      console.log(err)
   });
};

exports.getStudentById = (id) => {
   return fetch(`${URL}/list/${id}`, {
      method: 'GET',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${JSON.parse(getToken())}`
      }
   }).then(res => {
      return res.json();
   })
};

exports.uploadPicture = (formData) => {
   return fetch(`${URL}/upload`, {
      method: 'POST',
      body: formData,
   }).then(res => {
      return res.json();
   })
};

exports.updateData = (userData) => {
   return fetch(`${URL}/profile`, {
      method: 'PUT',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${JSON.parse(getToken())}`
      },
      body: JSON.stringify(userData)
   }).then(res => {
      return res.json();
   }).catch(err => {
      console.log('Une erreur est survenue: ', err);
   })
};

exports.login = (userData) => {
  return fetch(`${URL}/login`, {
     method: 'post',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(userData)
  }).then(res => {
   return res.json();
  }).catch(err => {
   console.log(err)
  });
};