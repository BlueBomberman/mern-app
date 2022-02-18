const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

//add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//modularize routes
app.use("/api/goals", require("./routes/goalRoutes"));

//ovverride the default err handler
app.use(errorHandler);

app.listen(port, () => console.log("Server started on port", port));
