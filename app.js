const express = require('express');
require('./config/database')//database connection
const path = require('path');
const routes = require('./src/routes/routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');



app.use('/', routes);





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});