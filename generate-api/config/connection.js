const connectiontemplate = () => {
  return `
    var mongoose = require("mongoose");
    const connectDb = async ({ url }) => {
    await mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        throw err;
      }
      console.log("Connected to Mongo !");
        }
    );
    };

    module.exports = connectDb;
    `;
};
module.exports =  connectiontemplate