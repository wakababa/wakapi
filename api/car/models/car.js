
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  let user = new Schema(
  
   {"name":"String","model":"String"}
  ,
  { collection:  "Cars"  }
  );

  module.exports = mongoose.model("cars", user);
  