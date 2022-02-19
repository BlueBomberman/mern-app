const express = require("express");
const router = express.Router();
const { getGoals, updateGoal, setGoal, deleteGoal } = require("../controllers/goalController");

const { protect } = require('../middleware/authMiddleware')
//you could put your code here directly, but it's a best practise to have controllers
/* router.get("/", getGoals);
router.post("/", setGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal); */

router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
