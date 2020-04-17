const express = require('express');
const { getLocals } = require('../utils');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('niveau4', getLocals({ contentClass: 'niveau4' }));
});

module.exports = router;
