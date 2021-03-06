const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");
const routeLoader = require("./routes");

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

app.use(bodyParser.json());
app = routeLoader.load(app);

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
      console.log(`Servidor corriendo en puerto ${ PORT }`);
});