const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");
const routeLoader = require("./routes");

const { dbConnection } = require("./config/db.config");

require('dotenv').config();
let app = express();

const PORT = process.env.PORT || 5000;
const FRONT_URL = process.env.FRONT_URL || 'http://localhost:3000'; 

app.use(
  cors({
    origin: `${FRONT_URL}`,
    credentials: true
  })
);

dbConnection();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  
app.use('/api', routeLoader);

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
      console.log(`Server running on port: ${ PORT }`);
});
