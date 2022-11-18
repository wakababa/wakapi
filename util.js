
//  CAPITALIZATION TO FIRST CHARACTER

const doCapital = (value) => {
  const modelname = String(value);
  const colelctionName =
    modelname[0].toUpperCase() + modelname.slice(1, modelname.length);
  return colelctionName;
};

const doPlural = (value,capital) => {
  if(!capital){
    return value + "s";
  }else{
     return  doCapital(value) + "s"
  }
};
const fs = require('fs')

const deletefromArray = async(name)=>{
  const readFile = await fs.readFileSync('config.json','utf-8',(res)=>{
      return res
    })
    const parsed = JSON.parse(readFile)

      const data = [...parsed.filter(item=>item !== name)]
      const result  = JSON.stringify(data)
     console.log(result)
      await fs.writeFileSync('config.json',result)
    }
module.exports = { doCapital, doPlural, deletefromArray };
