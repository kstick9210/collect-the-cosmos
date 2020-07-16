const router = require('express').Router();
const collectionsCtrl = require('../controllers/collections');

router.use(require('../config/auth'));
router.post('/', checkAuth, collectionsCtrl.create);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;