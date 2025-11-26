
require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL || process.env.MONGO_URI ;

app.use(express.json({ limit: '10mb' }));
app.use(cors());

console.log('Using Mongo URL:', MONGO_URL);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("NOT CONNECTED TO NETWORK", err);
  
  });

app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});