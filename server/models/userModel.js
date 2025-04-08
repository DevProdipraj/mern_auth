import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  virefyOtp: {
    type: String,
    default: "",
  },
  verifyOtpExpireAt: {
    type: Number,
    default: 0,
  },
  isAccountVirefy: {
    type: Boolean,
    default: false,
  },
  resetOtp: {
    type: String,
    default: "",
  },
  sendVerifyOtp: {
    type: String,
    default: "",
  },
  resetOtpExpireAt: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
