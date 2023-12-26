import jwt from "jsonwebtoken";
import {
  authData,
  otpRequestData,
  otpValidateData,
  resetPasswordData,
  serverStatusData,
} from "../db/auth.js";

export const requestServerStatus = (req, res) => {
  res.send(serverStatusData.response);
};

export const requestAuth = (req, res) => {
  const conation =
    req.body.username === "mohammed@codelantic.com" &&
    req.body.password === "Test_1user";

  if (conation) {
    res.send(authData.response);
  } else {
    res.status(401).send(authData.error);
  }
};

export const requestOtp = (req, res) => {
  const conation = req.body.username === "mohammed@codelantic.com";
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
    res.status(401).send(otpValidateData.error);
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
