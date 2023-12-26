// add all routes here
import express from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";

const app = express();

app.use(authRoutes);
app.use(userRoutes);

export default app;
