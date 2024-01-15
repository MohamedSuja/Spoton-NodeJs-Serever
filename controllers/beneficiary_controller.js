import {
  addBank,
  agentBeneficiaryDetailsSave,
  agentReceivingCountriesType,
  beneficiaryCountries,
  beneficiaryList,
  beneficiaryView,
  currencyName,
} from "../db/beneficiary.js";

export const requestBeneficiaryList = (req, res) => {
  if (req.query.isCorporate) {
    res.send(beneficiaryList.responseCorporate);
  } else {
    res.send(beneficiaryList.responseIndividual);
  }
};

export const requestBeneficiaryView = (req, res) => {
  res.send(beneficiaryView.response);
};

export const requestBeneficiaryCountries = (req, res) => {
  res.send(beneficiaryCountries.response);
};

export const requestCurrencyName = (req, res) => {
  res.send(currencyName.response);
};

export const requestAgentReceivingCountriesType = (req, res) => {
  res.send(agentReceivingCountriesType.response);
};

export const requestAgentBeneficiaryDetailsSave = (req, res) => {
  res.send(agentBeneficiaryDetailsSave.response);
};

export const requestAddBank = (req, res) => {
  res.send(addBank.response);
};
