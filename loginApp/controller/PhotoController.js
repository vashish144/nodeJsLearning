const express = require("express");
const PhotoRouter = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
PhotoRouter.use(bodyParser.urlencoded({ extended: true }));
PhotoRouter.use(bodyParser.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

PhotoRouter.post("/", upload.single("image"), (req, res) => {
  res.send({ message: "Image uploded" });
});
module.exports = PhotoRouter;
