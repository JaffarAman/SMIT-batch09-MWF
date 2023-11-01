const express = require("express");
const {
  SignupController,
  LoginController,
} = require("../controller/authController");
const { authMiddleware } = require("../middlewares");
const {
  createPostController,
  getPostController,
  singlePostController,
  updatePostController,
  deletePostController,
} = require("../controller/postController");
const router = express.Router();

// auths
router.post("/api/signup", SignupController);
router.post("/api/login", LoginController);

// posts
router.post("/api/post", [authMiddleware], createPostController);
router.get("/api/post", [authMiddleware], getPostController);
router.put("/api/post/:id", [authMiddleware], updatePostController);
router.delete("/api/post/:id", [authMiddleware], deletePostController);
router.get("/api/post/:id", [authMiddleware], singlePostController);

module.exports = router;
