const express = require("express");
const router = express.Router();

const listActions = require('./controller.js');

router.get('/', listActions);

module.exports = router;