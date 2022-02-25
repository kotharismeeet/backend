const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const upload = require('./middleware/fileupload.js');

const app = express();
app.use(cors());

app.use('/api',upload, require('./routes/uploadRouter.js'));

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
});
