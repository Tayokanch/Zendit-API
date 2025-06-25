import express from "express";
import {fetchEsimController, purchaseEsimController} from "../controllers/esim.controller.js"


const router = express.Router();
router.get('/esims', fetchEsimController)
router.post('/buy-esim', purchaseEsimController)

export default router;