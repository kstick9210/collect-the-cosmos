const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const nasaPhotosRouter = require('./routes/nasaphotos-api');
const collectionsRouter = require('./routes/collections');
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/nasaphotos', nasaPhotosRouter);
app.use('/api/collections', collectionsRouter);

app.listen(port, () => {
    console.log(`Express is listening on port ${port}.`);
});