import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    console.log(token);
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
};

export const authHandler = (req, res) => {
  const verifyToken = jwt.verify(req.token, "VERY_SECRET_KEY");
  if (!verifyToken)
    return res
      .status(400)
      .send({ message: "ERROR: Could not connect to the protected route" });
  res.send({ message: "OK" });
};
