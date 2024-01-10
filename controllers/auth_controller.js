import jwt from "jsonwebtoken";
import {
  authData,
  otpRequestData,
  otpValidateData,
  resetPasswordData,
  serverStatusData,
} from "../db/auth.js";
import { Constants } from "../utils/constants.js";

export const requestServerStatus = (req, res) => {
  res.send(serverStatusData.response);
};

export const requestAuth = (req, res) => {
  const conation =
    req.body.username === Constants.email &&
    req.body.password === Constants.password;

  if (conation) {
    res.send(authData.response);
  } else {
    res.status(401).send(authData.error);
  }
};

export const requestOtp = (req, res) => {
  const conation = req.body.username === Constants.email;
  if (conation) {
    res.send(otpRequestData.response);
  } else {
    res.status(401).send(otpRequestData.error);
  }
};

export const requestOtpValidate = (req, res) => {
  const conation = req.query.token === "177408";
  if (conation) {
    res.send(otpValidateData.response);
  } else {
    res.send(otpValidateData.error);
  }
};

export const requestResetPassword = (req, res) => {
  const conation = req.body.token === "177408";
  if (conation) {
    res.send(resetPasswordData.response);
  } else {
    res.status(401).send(resetPasswordData.error);
  }
};
