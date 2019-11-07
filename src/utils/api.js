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

exports.userLoginFetch = user => {
   return dispatch => {
     return fetch("http://localhost:3002/login", {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
       },
       body: JSON.stringify({user})
     })
       .then(resp => resp.json())
       .then(data => {
         if (data.message) {
           // Here you should have logic to handle invalid login credentials.
           // This assumes your Rails API will return a JSON object with a key of
           // 'message' if there is an error
         } else {
           localStorage.setItem("token", data.jwt)
           dispatch(loginUser(data.user))
         }
       })
   }
 }

 const loginUser = userObj => ({
   type: 'LOGIN_USER',
   payload: userObj
})