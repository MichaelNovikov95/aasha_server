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
app.use("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/success.html"));
  setTimeout(() => {
    res.redirect(303, process.env.CLIENT_URL);
  }, 2500);
});
app.use("/cancel", (req, res) => {});

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
