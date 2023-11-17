const express = require("express");
const {
  SignupController,
  LoginController,
  OTPVerify,
} = require("../controller/authController");
const { authMiddleware } = require("../middlewares");
const {
  createPostController,
  getPostController,
  singlePostController,
  updatePostController,
  deletePostController,
} = require("../controller/postController");
const upload = require("../utils/multer");
const router = express.Router();
const fs = require("fs");
const cloudinary = require("cloudinary").v2;


// auths
router.post("/api/signup", SignupController);
router.post("/api/login", LoginController);
router.post("/api/otp-verifcation", OTPVerify);

// posts
router.post("/api/post", [authMiddleware], createPostController);
router.get("/api/post", [authMiddleware], getPostController);
router.put("/api/post/:id", [authMiddleware], updatePostController);
router.delete("/api/post/:id", [authMiddleware], deletePostController);
router.get("/api/post/:id", [authMiddleware], singlePostController);

//upload image
router.post("/api/uploadimage", upload.any("image"), (req, res) => {
  console.log("files", req.files);
  const path = req.files[0].path;
  cloudinary.uploader.upload(path, (error, data) => {
    if (error) {
      return res.json({
        message: "Could not upload image to cloud , try again",
      });
    }
    res.json({
      message: "image upload",
      data,
    });
    ///delete file
    fs.unlinkSync(path);
  });
});

// //user api's
// router.post("/api/user");
// router.get("/api/user");
// router.put("/api/user");
// router.delete("/api/user");
// router.get("/api/user/:id");

module.exports = router;
