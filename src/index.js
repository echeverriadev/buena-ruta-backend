const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");
const routeLoader = require("./routes");

const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const { dbConnection } = require("./config/db.config");

require('dotenv').config();
let app = express();

const PORT = process.env.PORT || 5000;
const FRONT_URL = process.env.FRONT_URL || 'http://localhost:3000'; 
const ENVIROMENT = process.env.NODE_ENV || 'development'

app.use(
  cors({
    origin: `${FRONT_URL}`,
    credentials: true
  })
);

Sentry.init({
  environment: ENVIROMENT,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

dbConnection();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  
app.use('/api', routeLoader);

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
      console.log(`Server running on port: ${ PORT }`);
});
