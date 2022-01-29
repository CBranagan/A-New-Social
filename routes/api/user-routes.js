const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../contollers/user-controller");

// /api/user
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:id
router.route("./:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
