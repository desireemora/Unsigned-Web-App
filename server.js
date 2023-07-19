const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.get("/api/artists", (req,res) => {
    res.send("Emma Seckso and Her Mirror Selfies")
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});