import express from "express";
import { parse, parseAllSportsFeeds } from "../controllers/rss.js";

const router = express.Router();

router.get("/", parse);
router.get("/all", parseAllSportsFeeds);

export default router;
