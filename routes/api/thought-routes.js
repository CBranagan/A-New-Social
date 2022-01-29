const router = require("express").Router();

const {
  getAllThoughts,
  addThought,
  updateThought,
  deleteThought,
  getThoughtById,
} = require("../../contollers/thought-controller");

// api/thought

router.route("/").get(getAllThoughts);

// api/thought/userId

router.route("/:userId").post(addThought);

router
  .route("/:id")
  .put(updateThought)
  .get(getThoughtById)
  .delete(deleteThought);

module.exports = router;
