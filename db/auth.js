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
    jwttoken:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb25leEBiYW5rb3lvLmNvbSIsInVzZXJfaWQiOjEsImV4cCI6MTY5NjQwNDg4NiwiaXNfdGZhX2VuYWJsZWQiOm51bGwsImlhdCI6MTY5NjQwMTI4NiwidGZhRGVmYXVsdFR5cGUiOm51bGwsImNsaWVudF9jb2RlIjoiTU4ifQ.SjQUVU-UbUJIqeKFjkBAxl1P8ZvIT12VCYkLe4-JxEZn_XJw0yM4dCYZNvXF6aajiUhyQcZ_tZdLowgeVLuzKA",
    refreshToken:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb25leEBiYW5rb3lvLmNvbSIsInVzZXJfaWQiOjEsInJlZnJlc2giOnRydWUsImV4cCI6MTY5NzAwNjA4NiwiaXNfdGZhX2VuYWJsZWQiOm51bGwsImlhdCI6MTY5NjQwMTI4NiwidGZhRGVmYXVsdFR5cGUiOm51bGwsImNsaWVudF9jb2RlIjoiTU4ifQ.nX-9yX8WYC1-d-3rAc4mdbs_poeI7NYThYZUZ2EY9zkSqM3InK0sw_W-2iQXWgQp_D5NuHxyqZZCpd9BmCaCFQ",
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
    username: "mohammed@codelantic.com",
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
