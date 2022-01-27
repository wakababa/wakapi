# Wakapi

## This Module Based On Express and MongoDb

## The Aim faster build api

`npm install wakapi --save`

`npx wakapi --save`

You can easly create your api without any problem.Can change everything in code nothing to hid from you !

const {createApi} = require("./generate-api/index");
createApi({
    apiname: "feed1",
    url: "mongodb+srv://waka:waka@cluster0.jtleo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    prop: {
     title:"string"
    }
})
