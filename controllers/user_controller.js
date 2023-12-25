import { agentExposableIdData, userData, userUpdateData } from "../db/user.js";

export const requestUserData = (req, res, next) => {
  const conation = req.query.email === "mohammed@codelantic.com";
  if (conation) {
    res.send(userData.response);
  } else {
    res.send(userData.error);
  }
};

export const requestUserUpdateData = (req, res) => {
  const conation = req.body.userId == 357;
  if (conation) {
    res.send(userUpdateData.response);
  } else {
    res.send(userUpdateData.error);
  }
};

export const requestAgentExposableId = (req, res) => {
  const conation = req.query.username === "mohammed@codelantic.com";
  if (conation) {
    res.send(agentExposableIdData.response);
  } else {
    res.status(401).send(agentExposableIdData.error);
  }
};
