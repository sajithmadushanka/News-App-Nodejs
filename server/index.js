
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const { route } = require("./routes/news.routes");
const router = require("./routes/_index.routers");



// express app
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({origin:"*"}));
app.use(bodyParser.json());

app.use("/api/v1/", router)

// test
app.get("/test", (req, res) =>{
    res.send("Test ok from server");
}) 

app.listen(PORT,()=>{
    console.info('Server is runniing on port ', PORT);
})