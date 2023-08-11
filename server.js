const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

//connecting to DB
connectDb();
const app = express();

const port = process.env.PORT;

//provides the parser so that we can get the body from the client
app.use(express.json());
//Artist Routes import
app.use("/api/artists", require("./routes/artistRoutes"));
//Importing error handler
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});