const { Router } = require("express");
const router = Router();

const userRoute = require("./user.route");

router.use('/users', userRoute);
router.get('/', (req, res) => {
  res.send("HELLO WORLD")
})

module.exports = router;
