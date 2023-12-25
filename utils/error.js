export const createError = (status, message) => {
  const err = new Error();
  err.timestamp = new Date().toISOString();
  err.status = status;
  err.error = message;
  err.message = "";
  err.path = "/agentSender/detailsForAgentCustomer/JVb3mfaNS29";
  return err;
};
