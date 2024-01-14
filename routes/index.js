// add all routes here
import express from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import beneficiaryRoutes from "./beneficiary.js";

const app = express();

app.use(authRoutes);
app.use(userRoutes);
app.use(beneficiaryRoutes);

export default app;
