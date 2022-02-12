const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router.post("/addstaff",staffController.addstaff);
router.post("/login",staffController.login);

router.put("/:id" ,staffController.updateStaff);


module.exports= router;