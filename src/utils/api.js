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