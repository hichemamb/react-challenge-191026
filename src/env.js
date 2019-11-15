const prod = {
   url: {
      BACKEND_URL: ''
   }
};


const dev = {
   url: {
      BACKEND_URL: 'http://localhost:8080'
   }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;