import Products from "../products_db/Products.mjs";

export const getAllProducts = (req, res) => {
  const products = Products;
  return res.send(products);
};

export const getAllStickers = (req, res) => {
  const allStickers = Products.filter(
    (product) => product.category === "stickers"
  );
  return res.send(allStickers);
};

export const getAllBooks = (req, res) => {
  const allBooks = Products.filter((product) => product.category === "books");
  return res.send(allBooks);
};

export const getAllPins = (req, res) => {
  const allPins = Products.filter((product) => product.category === "pins");
  return res.send(allPins);
};

export const getAllPrints = (req, res) => {
  const allPrints = Products.filter((product) => product.category === "prints");
  return res.send(allPrints);
};

export const getPinById = (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  const allPins = Products.filter((product) => product.category === "pins");
  const onePin = allPins.find((pin) => pin.id === parsedId);
  return res.send(onePin);
};

export const getStickerById = (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  const allStickers = Products.filter(
    (product) => product.category === "stickers"
  );
  const oneSticker = allStickers.find((sticker) => sticker.id === parsedId);
  return res.send(oneSticker);
};

export const getBookById = (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  const allBooks = Products.filter((product) => product.category === "books");
  const oneBook = allBooks.find((pin) => pin.id === parsedId);
  return res.send(oneBook);
};

export const getPrintById = (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  const allPrints = Products.filter((product) => product.category === "prints");
  const onePrint = allPrints.find((print) => print.id === parsedId);
  return res.send(onePrint);
};

export const getCartView = (req, res) => {
  res.json({ message: "You have access to cart!" });
};
