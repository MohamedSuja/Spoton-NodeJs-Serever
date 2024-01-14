import { Constants } from "../utils/constants.js";

export const userData = {
  response: {
    status: true,
    errorCode: 0,
    errorDescription: null,
    responseDto: {
      agentSenderDetailsId: 65,
      customerFirstName: "Ajanitha",
      customerLastName: "Kartheeban",
      telephoneNo: "766217944",
      handphoneNo: "766217944",
      email: "mohammed@codelantic.com",
      residentialAddress: "01, street",
      dateOfBirth: "1991-08-01",
      placeOfBirth: "Colombo",
      postCode: "10000",
      isActive: true,
      activatedDate: "2018-12-21",
      isApproved: true,
      approvedDate: "2022-08-30",
      amlCheckDate: "2022-08-30",
      city: "colombo",
      isCooperateEnable: true,
      agentDetailsId: 1,
      fullName: "Ajanitha Kartheeban",
      registeredFrom: "AGENT_CUSTOMER_PORTAL",
      registeredDate: "2022-08-30",
      isCooperate: false,
      stateOrProvince: "West",
      title: "Miss",
      signUpCountryId: 823,
      countryCodeId: 1,
      countryCodeMobileId: 1,
      nationalityDetailsId: 200,
      signUpClientCoutryId: 1,
      countryCodeValue: "+94",
      mobileCodeValue: "+94",
      nationalityValue: "Sri Lankan",
    },
  },
  error: {
    status: false,
    errorCode: 777,
    errorDescription: "Specified Email does not exist",
    responseDto: null,
  },
};

export const userUpdateData = {
  response: {
    status: true,
    errorCode: 0,
    errorDescription: null,
    responseDto: {
      id: 357,
      firstName: "Mohammed",
      lastName: "Suja",
      contactNo: "7864261999",
      address: "Waddon Park Avenue ",
      password: "123456",
      isRegistred: "CREATED",
    },
  },
  error: {
    status: false,
    errorCode: 777,
    errorDescription: "Specified Usee id does not exists",
    responseDto: null,
  },
};

export const agentExposableIdData = {
  response: {
    status: true,
    errorCode: 0,
    errorDescription: null,
    responseDto: {
      agentExposableId: "JVb3mfaNS29",
    },
  },
  error: {
    timestamp: "2023-12-25T11:11:03.221+00:00",
    status: "BAD_REQUEST",
    errors: ["Specified Email does not exist"],
  },
};
