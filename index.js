const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./config/db.js');
connectToDatabase(process.env.LOCAL_DATABASE_URI);

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const passport = require('passport');
//serialize and deserialize particularly!
require('./config/passport.js')(passport);

const session = require('express-session');
const {createProxyMiddleware} = require('http-proxy-middleware');

app.use(
    session({
        secret: process.env.cookieKey,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());
const passportRoute = require('./routes/authPassportRoutes.js');
app.use('/api/auth',passportRoute);

app.use('/api/proxy', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
        [`#`]: '',
    },
 }));
//app.use('/api/customer',require('./routes/customerRoutes.js'));

app.get('/api/helloworld',(req,res) => {
    return res.sendStatus(200);
});


const PORT = process.env.SERVER_PORT;
app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`);
});