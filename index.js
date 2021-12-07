const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express());
app.use(cors());
if (process.env.NODE_ENV === 'production') {
    console.log("production hhhhhhhhhhhhhhh");
   app.use( express.static("employeemgmtfrontend/build"));
}
require("./startingfolder/logging")();
require("./startingfolder/connectToDB")();
require("./startingfolder/routes")(app);
// console.log(process.env);
// process.env.port, process.env.Host
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`app is listening on port $ ${PORT}`);
});

/*
STEP 1: set port const PORT = process.env.PORT || 9000;
STEP 2:set mongo db url to process.env.MONGODB_URI||process.env.DB_HOST  //the 2nd is local db
STEP 3:check process.env.NODE_ENV === 'production'
  // mongodb+srv://hayelom:hayelom@cluster0.nekxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/