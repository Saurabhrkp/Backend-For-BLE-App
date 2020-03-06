var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('Good!');
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
