import express from "express";
import {getAvailableEsims} from "../controllers/esim.controller.js"


const router = express.Router();
router.get('/esims', getAvailableEsims)

export default router;