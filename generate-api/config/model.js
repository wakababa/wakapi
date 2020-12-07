const {doPlural} = require('../../util')

const modelTemplate = ({name,prop}) => {
  const bignames =  JSON.stringify(doPlural(name,capital=true))
  const plural = JSON.stringify(doPlural(name,capital=false))
  const myprop = JSON.stringify(prop)
  return`
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  let user = new Schema(
  
   ${myprop}
  ,
  { collection:  ${bignames}  }
  );

  module.exports = mongoose.model(${plural}, user);
  `
};

module.exports= modelTemplate

