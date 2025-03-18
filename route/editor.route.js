import express from "express";
import { saveContent, getContent } from "../controllers/editor.controller.js";

const router = express.Router();

router.post("/save-content", saveContent);
router.get("/get-content", getContent);
export default router;
