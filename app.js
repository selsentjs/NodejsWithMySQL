require('dotenv').config();
const express = require("express");
const jobsRoute = require('./route/jobsRoute')
require('./database/connection');
const app = express();

app.use(express.json());
app.use("/api/jobs", jobsRoute)


app.get("/", (req, res) => {
  res.send("welcome to sql");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
