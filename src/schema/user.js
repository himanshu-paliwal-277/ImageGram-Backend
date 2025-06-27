import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      validate: {
        validator: (emailValue) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema); // user collection

export default User;
