export const userData = {
  response: {
    status: true,
    errorCode: 0,
    errorDescription: null,
    responseDto: {
      agentSenderDetailsId: 1,
      customerFirstName: "Mohammed",
      customerLastName: "Suja",
      telephoneNo: "7864261999",
      residentialAddress: "Waddon Park Avenue ",
      dateOfBirth: "1987-07-16",
      fullName: "Mohammed Suja",
      title: "MR",
      email: "mohammed@codelantic.com",
      agentDetailsId: 1,
      agentName: "qa_Spoton Money",
      agentRegNumber: "MXAG01",
      agentExposableId: "JVb3mfaNS29",
      userId: 357,
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
