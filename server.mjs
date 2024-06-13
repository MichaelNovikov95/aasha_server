import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connect from "./src/config/db.mjs";
import shopRouter from "./src/routers/shopRouter.mjs";
import loginRouter from "./src/routers/authRouter.mjs";

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static("https://main--aashashop.netlify.app/"));
app.use("/images", express.static("images"));
app.use(cors());
app.use(express.json());
app.use("/", loginRouter);
app.use("/shop", shopRouter);

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
