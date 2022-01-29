const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../contollers/user-controller");

// /api/user
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
