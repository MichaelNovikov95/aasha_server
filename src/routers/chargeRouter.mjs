import { Router } from "express";

import { paymentHandler } from "../controllers/paymentController.mjs";
import { OrderHandler } from "../controllers/orderController.mjs";

const router = Router();

router.post("/charge", paymentHandler);
router.post("/post/order", OrderHandler);

export default router;
