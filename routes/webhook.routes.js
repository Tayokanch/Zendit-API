import express from "express";
import { handleWebhook } from "../controllers/webhook.controller.js";

const router = express.Router();

// POST for incoming payloads, HEAD for Zendit verification
router.route("/webhook").post(handleWebhook).head((req, res) => res.sendStatus(200));

export default router;
