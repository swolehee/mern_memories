import express from "express";
import { getStocks } from "../controllers/stocks.js";

const router = express.Router();

router.get("/", getStocks);

export default router;
