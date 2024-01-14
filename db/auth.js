import { Constants } from "../utils/constants.js";

export const serverStatusData = {
  response: {
    status: true,
    errorCode: 0,
    errorDescription: null,
    responseDto: "server is up and running",
  },
};

export const authData = {
  response: {
    jwttoken: Constants.token,
    refreshToken: Constants.token,
  },
  error: {
    path: "/v1/auth/authenticate",
    error: "Unauthorized",
    message: "Please provide correct Credentials.",
    timestamp: 1703489927578,
    status: 401,
  },
};

export const otpRequestData = {
  response: {
    sucess: true,
  },
  error: {
    timestamp: "2023-12-25T13:12:03.198+00:00",
    status: 400,
    errors: ["Please provide a valid Activated by mail address."],
  },
};

export const otpValidateData = {
  response: {
    username: Constants.email,
  },
  error: {
    username: null,
  },
};

export const resetPasswordData = {
  response: {
    status: true,
    errorCode: 0,
    errorDescription: null,
    responseDto: "failed",
  },
  error: {
    timestamp: "2023-12-25T13:15:03.001+00:00",
    status: 400,
    errors: ["Token can't be blank"],
  },
};
