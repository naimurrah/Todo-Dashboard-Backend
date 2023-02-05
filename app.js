const express = require("express");
const mongoose = require("mongoose");
//const cors = require("cors");

//require('dotenv').config()

const app = express();
const PORT_NUM = process.env.APPSETTING_SERVER_PORT || 8080;

app.use(express.json());

mongoose.set('strictQuery', true);
//app.use(cors());

app.listen(PORT_NUM,  async () => {
    await mongoose.connect(process.env.APPSETTING_MONGO_API_KEY);
    console.log("Server Started, Listening on Port "+ PORT_NUM);
});

app.get("/", (req, res) => {
    console.log("logged");
    res.json({test:"klflkaf"});
    console.log({hi:"test"});
});

todoRouter = require("./routes/Todos-Router");
weatherRouter = require("./routes/Weather-Router");

app.use("/todos", todoRouter);
app.use("/weather", weatherRouter);