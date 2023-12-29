import express from "express";
import { parse, parseAllSportsFeeds, parseSportsArticle } from "../controllers/sports.js";

const router = express.Router();

router.get("/", parse);
router.get("/all", parseAllSportsFeeds);
router.get("/article", parseSportsArticle);

export default router;
