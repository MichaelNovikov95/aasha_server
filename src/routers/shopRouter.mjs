import { Router } from "express";
import {
  getAllProducts,
  getAllPins,
  getAllBooks,
  getAllStickers,
  getAllPrints,
  getPinById,
  getBookById,
  getStickerById,
  getPrintById,
  getCartView,
} from "../controllers/shopController.mjs";

const router = Router();

router.get("/", getAllProducts);
router.get("/pins", getAllPins);
router.get("/pins/:id", getPinById);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.get("/stickers", getAllStickers);
router.get("/stickers/:id", getStickerById);
router.get("/prints", getAllPrints);
router.get("/prints/:id", getPrintById);

export default router;
