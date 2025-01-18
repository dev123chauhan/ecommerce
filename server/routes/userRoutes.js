const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require("../middleware/auth")

router.post('/register', auth, userController.registerUser);
router.post('/login',auth, userController.loginUser);
// router.post('/change-password',userController.changePassword);
router.put('/update-profile', auth, userController.updateProfile);

module.exports = router;