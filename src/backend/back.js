const { eventNames } = require("cluster");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const app = express();

const parkingLot = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/newcar", (req, res) => {
  const { newcar } = req.body;
});

app.listen(9000, () => {
  console.log("Your server is running at port 9000...");
});
