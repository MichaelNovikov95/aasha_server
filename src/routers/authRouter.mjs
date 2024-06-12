import { Router } from "express";
import { signIn, Registration } from "../controllers/authController.mjs";

const router = Router();

router.post("/login", signIn);
router.post("/registration", Registration);

export default router;
