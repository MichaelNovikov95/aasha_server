import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decodedData = jwt.verify(token, process.env.SECRET_ACCESS_KEY);
    req.user = decodedData;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
