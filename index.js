const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./config/db.js');
connectToDatabase(process.env.LOCAL_DATABASE_URI);

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/customer',require('./routes/customerRoutes.js'));
app.use('/api/vendor',require('./routes/vendorRoutes.js'));
app.use('/api/item',require('./routes/itemRoutes.js'));

app.get('/api/helloworld',(req,res) => {
    return res.send('Hello World!').sendStatus(200);
});


const PORT = process.env.SERVER_PORT;
app.listen(PORT, ()=> {
    console.log(`Server is listening on ${PORT}`);
});