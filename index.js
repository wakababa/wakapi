var createApi = require('./generate-api/index')

createApi({
    apiname:"user",
    prop:{
        name:"String",
        age:"Number"
    },
    url:"mongodb+srv://waka:waka@cluster0.jtleo.mongodb.net/test1"

})