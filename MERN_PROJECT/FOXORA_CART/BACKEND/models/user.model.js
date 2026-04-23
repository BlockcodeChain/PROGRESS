import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"]
  },

  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: function () {
      return this.provider === "local"; // ✅ google user ke liye required nahi
    }
  },

  cartdata: {
    type: Object,
    default: {} // ✅ FIXED
  },

  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local"
  },

  emailVerified: {
    type: Boolean,
    default: false
  },

  verificationToken: {
    type: String
  },

  resetPasswordToken: {
    type: String
  },

  resetPasswordExpire: {
    type: Date
  }

}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User