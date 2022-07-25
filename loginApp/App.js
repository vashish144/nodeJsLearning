const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const db = require("./db");
const cors = require("cors");
const port = 5000;

const AuthController = require("./controller/AuthController");
const PhotoController = require("./controller/PhotoController");
app.use(cors());
app.use("/uploads", express.static(path.join("uploads")));
app.use("/api/auth", AuthController);
app.use("/api/photo", PhotoController);

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log("file unlink error", err);
    });
  }
});
app.listen(port, () => {
  console.log(`app is listening on port no: ${port}`);
});
