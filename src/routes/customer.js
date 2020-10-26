const express =  require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js')



router.get('/', customerController.list)

router.post('/add', customerController.add);

router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.updateForm)
router.post('/update/:id', customerController.updateCustomer)

module.exports = router;