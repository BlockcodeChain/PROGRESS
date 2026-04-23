import mongoose, { Schema, model, models } from "mongoose";

interface IUser {
  _id?: mongoose.Types.ObjectId; // optional (Mongo creates it)
  name: string;
  email: string;
  password: string;
  mobile?: string;
  role: "user" | "deliveryBoy" | "admin";
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "deliveryBoy", "admin"],
      default: "user",
    }
  },
  { timestamps: true }
);

// Important for Next.js (prevents model overwrite error)
const User = models.User || model<IUser>("User", UserSchema);

export default User;