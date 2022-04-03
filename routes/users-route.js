const express = require('express');
const router = express.Router();

const {
  getUserData,
  editHabits,
  editData,
  getHello,
} = require('../controllers/users-controller');
router.route('/').get(getHello);
router.route('/get-user-data/').post(getUserData);
router.route('/edit-habits/:id').patch(editHabits);
router.route('/edit-data/:id').patch(editData);

module.exports = router;
