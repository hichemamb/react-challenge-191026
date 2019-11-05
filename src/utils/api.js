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
