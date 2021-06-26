const express = require('express');
const router = express.Router();

const schoolCtrl = require('../controllers/school');

router.get('/', schoolCtrl.getAllSchool);
router.post("/",schoolCtrl.createSchool);
router.get('/:id', schoolCtrl.getOneSchool);
router.put('/:id', schoolCtrl.modifySchool);
router.delete('/:id', schoolCtrl.deleteSchool);

module.exports = router;
