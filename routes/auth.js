import express from "express";
import {
  requestAuth,
  requestOtp,
  requestOtpValidate,
  requestResetPassword,
  requestServerStatus,
} from "../controllers/auth_controller.js";

const router = express.Router();

//server status
router.get("/server/status", requestServerStatus);

//login
router.post("/v1/auth/authenticate", requestAuth);

//otp
router.post("/resetPassword/request", requestOtp);

//verify otp
router.get("/resetPassword/validate", requestOtpValidate);

//reset password
router.post("/resetPassword/reset", requestResetPassword);

export default router;
