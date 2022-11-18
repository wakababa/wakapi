const fs = require('npm:fs')
const configTemplate = async({ name }) => {

    const readFile = await fs.readFileSync('config.json','utf-8',(res)=>{
      return res
    })
    const parsed = JSON.parse(readFile)

    if(parsed.includes(name)){
      console.log(`${name.toUpperCase()} already added ! `)
    }else{
      const data = [...parsed,name]
      const result  = JSON.stringify(data)
     
      await fs.writeFileSync('config.json',result)
    }
  
  
  };

  module.exports = configTemplate