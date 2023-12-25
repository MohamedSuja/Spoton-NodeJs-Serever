import express from "express";
import routes from "./routes/index.js";
const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

//create server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Node Server is running on http://localhost:${PORT}`);
});
