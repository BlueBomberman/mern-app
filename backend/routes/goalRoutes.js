const express = require("express");
const router = express.Router();
const { getGoals, updateGoal, setGoal, deleteGoal } = require("../controllers/goalController");

//you could put your code here directly, but it's a best practise to have controllers
/* router.get("/", getGoals);
router.post("/", setGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal); */

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;
