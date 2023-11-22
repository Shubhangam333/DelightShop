import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
};
