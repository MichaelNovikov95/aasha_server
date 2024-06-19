import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connect from "./src/config/db.mjs";
import shopRouter from "./src/routers/shopRouter.mjs";
import loginRouter from "./src/routers/authRouter.mjs";
import chargeRouter from "./src/routers/chargeRouter.mjs";

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static(process.env.CLIENT_URL));
app.use("/images", express.static("images"));
app.use(cors());
app.use(express.json());
app.use("/", loginRouter);
app.use("/shop", shopRouter);
app.use("/shop/cart", chargeRouter);
app.get("/success", (req, res) => {
  setTimeout(() => {
    res.redirect(303, "https://aashashop.netlify.app/success");
  }, 0);
});
app.get("/cancel", (req, res) => {
  setTimeout(() => {
    res.redirect(303, "https://aashashop.netlify.app/cancel");
  }, 0);
});

const main = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
main();
