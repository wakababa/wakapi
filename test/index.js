import { createApi } from "wakapi";
createApi({
  apiname:"user",
  url:"mongodb+srv://waka:waka@cluster0.jtleo.mongodb.net/?retryWrites=true&w=majority",
  prop:{
    name:"String",
    age:"Number",
    job:"String"
  }
})
