//const con = require("");

// get alll job details

const getAllJobDetails = async (req, res) => {
  res.send("get all the jobs");
};

// create single job
const getSingleJob = async (req, res) => {
  res.send("get single job");
};

// create job
const createJob = async (req, res) => {
  res.send("create new job");
};

//update job
const updateJob = async (req, res) => {
  res.send("update jobs");
};

// delete job
const deleteJob = async (req, res) => {
  res.send("delete jobs");
};

module.exports = {
  getAllJobDetails,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
};
