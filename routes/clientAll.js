const clientCatch = require("express").Router();
const path = require("path");

clientCatch.get("*", (req, res) => {
  res.sendFile(
    path.join(_dirname, "../coding/MyProjects/Fastconnect/Client/build")
  );
});

module.exports = clientCatch;
