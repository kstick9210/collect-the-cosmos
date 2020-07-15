const router = require('express').Router();
const nasaPhotosAPICtrl = require('../controllers/nasaphotos-api');

router.use(require('../config/auth'));
// router.post('/search', checkAuth, nasaPhotosAPICtrl.search);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;