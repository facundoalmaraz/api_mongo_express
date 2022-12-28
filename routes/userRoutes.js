import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
