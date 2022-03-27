const { Router } = require("express");
const UserController = require('../modules/user/user.controller')

const router = Router();

router.get('/', UserController.getUsers)


module.exports = router