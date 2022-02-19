const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

//you could put your code here directly, but it's a best practise to have controllers
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe); //protected

module.exports = router;
