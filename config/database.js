const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://127.0.0.1:27017/logistics",
    { useNewUrlParser: true, useUnifiedTopology: true}).then(db => {
      console.log("Database connected");
    }).catch(error => console.log("Could not connect to mongo db " + error));