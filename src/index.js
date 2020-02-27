const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors')

require('dotenv').config({ path: path.join(__dirname, '../.env') });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(helmet());
app.use(compression());
app.use(cors());

// Routes
app.use('/api/leaderboards', require("./routes/leaderboards"));

app.use(function(req, res){
    res.status(404);
    res.json({error : "Error"});
  });

// Mongoose
const url = process.env.DB_URL;
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true,});

app.listen(3002);
