import express from "express";
import {fetchEsimController, purchaseEsimController, getTransactionByIdController} from "../controllers/esim.controller.js"

const router = express.Router();
router.get('/esims', fetchEsimController)
router.post('/buy-esim', purchaseEsimController)
router.get('/transaction/:id', getTransactionByIdController)
router.get('/transaction', (req, res) => {
  res.status(400).json({
    error: 'Missing transaction ID in URL. Use /transaction/:id',
  });
});

export default router;