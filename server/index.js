const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('./config/env.js');
const db = require('./config/db');
const passport = require('passport');


const routerAuth = require('./routes/auth');
const routerProfile = require('./routes/profile');

app.use(cors());
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
   next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text({defaultCharset: 'utf-8'}));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/', routerAuth);
app.use('/', routerProfile);

db.sequelize.sync().then(() => {
   app.listen(env.PORT, () => {
      console.log('L\'application écoute le port 8080 :)');
   });
});


