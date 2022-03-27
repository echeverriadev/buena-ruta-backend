const { Router } = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const router = Router();

const userRoute = require("./user.route");

router.use('/users', userRoute);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.send("HELLO WORLD")
})

module.exports = router;
