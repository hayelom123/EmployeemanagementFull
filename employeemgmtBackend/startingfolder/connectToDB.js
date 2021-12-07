const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect(process.env.DB_HOST, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    })
    .then(() => {
      console.log("connected to data base");
    })
    .catch((er) => {
      console.log("something went Wrong: database connectionfailed",er);
    });
};
