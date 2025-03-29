import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addPost,
  updatePost,
  deletePost,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", authMiddleware, addPost);
router.get("/", authMiddleware, getUserPosts);
router.patch("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);

export default router;
