import express from "express";
const router = express.Router();

import {getAvailableEsims} from "../controllers/esim.controller.js"

router.get('/esims', getAvailableEsims)

export{router};