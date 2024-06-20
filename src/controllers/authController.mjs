import { User } from "../models/User.mjs";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.SECRET_ACCESS_KEY, { expiresIn: "1h" });
};

export const Registration = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors);
    const { first_name, last_name, email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res
        .status(400)
        .send({ message: `User with email ${email} is already exist` });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPass,
    });

    await user.save();
    return res.status(201).send({ message: "Registration success!" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ message: "Registration error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: "Bad credentials" });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send({ message: "Bad credentials" });
    const token = generateAccessToken(user._id);
    return res.json({ token, email });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: "Sign in error" });
  }
};
