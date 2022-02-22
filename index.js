const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./models/config.js');
connectToDatabase(process.env.LOCAL_DATABASE_URI);

const express = require('express');
const cors = require('cors');
const protect = require('./middleware/authMiddleware.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/authRoute.js'));

app.use('/api/customer',protect,require('./routes/customerRoutes.js'));

app.get('/api/helloworld',(req,res) => {
    return res.send('Hello World!').sendStatus(200);
});



const PORT = process.env.SERVER_PORT;
app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`);
});