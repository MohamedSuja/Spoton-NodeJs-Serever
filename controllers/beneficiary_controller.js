import {
  addBank,
  agentBeneficiaryDetailsSave,
  agentReceivingCountriesType,
  beneficiaryCountries,
  currencyName,
} from "../db/beneficiary.js";

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
