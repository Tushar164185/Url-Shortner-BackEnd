const express = require('express');
const { authenticate,decode } = require('../utili/middleware.js');
const { shorturlController } = require('../controller/shorturl.js');
const router = express.Router();
router.post("/",authenticate,decode,shorturlController);
module.exports = router;