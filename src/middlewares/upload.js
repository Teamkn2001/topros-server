const path = require("path");
const multer = require("multer");
const os = require("os");

// console.log("Temp directory:", os.tmpdir()); // Added this debug line

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log("Saving file to:", os.tmpdir()); // Added another debug line
    cb(null, os.tmpdir());
  },
  filename: (req, file, cb) => {
    const { id } = req.user;
    const fullFileName = `${id}_${Date.now()}_${Math.round(
      Math.random() * 1000
    )}${path.extname(file.originalname)}`;
    // console.log("Generated filename:", fullFileName); // Added debug line
    cb(null, fullFileName);
  },
});

module.exports = multer({ storage: storage });
