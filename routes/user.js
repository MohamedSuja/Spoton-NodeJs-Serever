import express from "express";
import {
  requestAgentExposableId,
  requestUserData,
  requestUserUpdateData,
} from "../controllers/user_controller.js";
import { verifyUser } from "../middlewares/verify_user_middleware.js";

const router = express.Router();
//get user data from db.json
router.get(
  "/agentSender/detailsForAgentCustomer/:agentExposableId",
  verifyUser,
  requestUserData
);

//update user data from db.json
router.put("/user/update", verifyUser, requestUserUpdateData);

//agentExposableId
router.get(
  "/agentSender/getExposableIdByUsername",
  verifyUser,
  requestAgentExposableId
);

export default router;
