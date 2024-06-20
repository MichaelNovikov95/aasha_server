import { Router } from "express";

import { paymentHandler } from "../controllers/paymentController.mjs";

const router = Router();

router.post("/charge", paymentHandler);

export default router;
