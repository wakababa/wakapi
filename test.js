const createApi = require("./generate-api");



createApi({
    apiname:"world",
    prop:{
        name:"String",
        number:"Number",
        age:"Number"
    },
    url:"mongodb+srv://waka:waka@cluster0.jtleo.mongodb.net/test1"
})