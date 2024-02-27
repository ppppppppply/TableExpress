const express = require("express");
const morgan = require("morgan");

const movieRouter = require('./movie');

const app = express();
app.use(express.static('public'))
app.use(morgan('common',{immediate:true}));
app.use('/movies', movieRouter);

app.get('/', (request, response) => response.redirect('/movies'));

app.listen(8080, () => {
    console.log('Server is listening to http://localhost:8080');
});