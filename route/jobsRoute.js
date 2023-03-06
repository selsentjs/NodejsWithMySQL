const express = require("express");

const router = express.Router();
const {
  getAllJobDetails,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controller/jobsController");

router.route("/").get(getAllJobDetails);
router.route("/:id").get(getSingleJob);
router.route("/").post(createJob);
router.route("/:id").put(updateJob);
router.route("/:id").delete(deleteJob);

module.exports = router;
