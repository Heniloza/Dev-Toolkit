import express from "express"
import { createSnippet, deleteSnippets, fetchSnippets } from "../controllers/snippetsCOntrollers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/create",authMiddleware,createSnippet)
router.get("/fetch",authMiddleware,fetchSnippets)
router.delete("/delete/:id",authMiddleware,deleteSnippets)

export default router