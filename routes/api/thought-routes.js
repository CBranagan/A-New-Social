const router = require("express").Router();

const {
  getAllThoughts,
  addThought,
  updateThought,
  deleteThought,
  getThoughtById,
  addReaction,
  deleteReaction,
} = require("../../contollers/thought-controller");

// api/thought

router.route("/").get(getAllThoughts);

// api/thought/userId

router.route("/:userId").post(addThought);

// api/thought/:id
router
  .route("/:id")
  .put(updateThought)
  .get(getThoughtById)
  .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
