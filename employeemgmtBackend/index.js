const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express());
app.use(cors());
require("./startingfolder/logging")();
require("./startingfolder/connectToDB")();
require("./startingfolder/routes")(app);
// console.log(process.env);
app.listen( process.env.port, process.env.Host, () => {
    console.log(`app is listening on port ${ process.env.Host}: ${process.env.port}`);
});