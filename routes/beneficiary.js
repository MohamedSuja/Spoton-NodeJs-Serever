import express from "express";
import {
  requestAddBank,
  requestAgentBeneficiaryDetailsSave,
  requestAgentReceivingCountriesType,
  requestBeneficiaryCountries,
  requestBeneficiaryList,
  requestBeneficiaryView,
  requestCurrencyName,
} from "../controllers/beneficiary_controller.js";
import { verifyUser } from "../middlewares/verify_user_middleware.js";

const router = express.Router();

router.get(
  "/agentBeneficiaryDetails/agentBeneficiaryFilter/:emailId",
  verifyUser,
  requestBeneficiaryList
);

router.get(
  "/agentBeneficiaryDetails/basic/detailsForMobile/:beneficiaryId",
  verifyUser,
  requestBeneficiaryView
);

router.get(
  "/agentReceivingCountries/beneficiaryCountries/:agentExposableId",
  verifyUser,
  requestBeneficiaryCountries
);

router.get(
  "/agentSendingCurrency/getAllByExposableId/:agentExposableId",
  verifyUser,
  requestCurrencyName
);

router.get(
  "/agentReceivingCountries/beneficiaryCountriesByCountryId/:countryId",
  verifyUser,
  requestAgentReceivingCountriesType
);

router.post(
  "/agentBeneficiaryDetails/save",
  verifyUser,
  requestAgentBeneficiaryDetailsSave
);

router.post(
  "/agentBanks/add/:agentExposableId/:countryId/:requestType",
  verifyUser,
  requestAddBank
);

export default router;
