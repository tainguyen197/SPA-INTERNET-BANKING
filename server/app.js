var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors');

var UserController = require('./apiControllers/userController');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        msg: 'welcome to my webapp'
    })
});

app.use('/api/user/', UserController);

var port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Banking API is running on port ${port}`);
})