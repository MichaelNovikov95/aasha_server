import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://mnovikov0195:${process.env.DB_PASS}@cluster0.8mgkyb1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
