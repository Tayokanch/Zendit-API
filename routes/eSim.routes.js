import express from "express";
import {fetchEsimController, purchaseEsimController, getTransactionByIdController} from "../controllers/esim.controller.js"

const router = express.Router();
router.get('/esims', fetchEsimController)
router.post('/buy-esim', purchaseEsimController)
router.get('/transaction/:id', getTransactionByIdController)

export default router;