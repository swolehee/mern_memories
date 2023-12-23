import express from "express";
import { parse } from "../controllers/rss.js";

const router = express.Router();

router.get("/", parse);

export default router;
