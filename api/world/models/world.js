
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  let user = new Schema(
  
   {"name":"String","number":"Number","age":"Number"}
  ,
  { collection:  "Worlds"  }
  );

  module.exports = mongoose.model("worlds", user);
  