import express from "express";
import { newBook, deleteBook, getMyBook } from "../controllers/book.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newBook);
router.get("/my", isAuthenticated, getMyBook);
router.delete("/:id", isAuthenticated, deleteBook);

export default router;
