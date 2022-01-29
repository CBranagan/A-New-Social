const router = require("express").Router();

import { getAllUsers, createUser } from "../../contollers/user-controller";

// /api/user
router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
