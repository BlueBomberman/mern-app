const path = require('path');
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB(); //if it fails it's usually because you forgot something in the mongo uri
//or you messed up the db access (didn't put your ip access/access to everyone)

const app = express();

//add middleware -> to pass body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//modularize routes - the second argument imports the routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build'))) //set static folder to build
    //for any route outside of api
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

//ovverride the default err handler
app.use(errorHandler);

app.listen(port, () => console.log("Server started on port", port));
