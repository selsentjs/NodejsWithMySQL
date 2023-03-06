const con = require("../database/connection");

// get alll job details

const getAllJobDetails = async (req, res) => {
  try {
    const sql = await "SELECT jobId,jobName,exp from job";
    con.query(sql, (err, job) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(job);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// create single job
const getSingleJob = async (req, res) => {
  const id = req.params.id;
  try {
    const sql = await "SELECT jobName,exp from job where jobId = ?";
    con.query(sql, id, (err, job) => {
      if (!id) {
        res.send("no id with this job");
      } else {
        res.status(200).json(job);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// create job
const createJob = async (req, res) => {
  const { jobName, exp } = req.body;
  try {
    const sql =
      (await "INSERT into job(jobName,exp) values('") +
      jobName +
      "','" +
      exp +
      "')";
    con.query(sql, (err, job) => {
      res.status(201).json("new job created");
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//update job
const updateJob = async (req, res) => {
  const id = req.params.id;
  const { jobName, exp } = req.body;
  try {
    const sql = await "UPDATE job set jobName=?, exp=? where jobId=?";
    con.query(sql, [jobName, exp, id], (err, job) => {
      if (!id) {
        res.send("no job with this id");
      } else {
        res.status(200).json(job);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete job
const deleteJob = async (req, res) => {
  const id = req.params.id;
  try {
    const sql = await "DELETE from job where jobId = ?";
    con.query(sql, id, (err, job) => {
      if (!id) {
        res.send("no job with this id");
      } else {
        res.status(200).json("job deleted successfully");
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllJobDetails,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
};
