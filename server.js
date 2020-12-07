
    var express = require("express");
    var mongoose = require("mongoose");
    var bodyParser = require("body-parser");
    var cors = require("cors");
    var connectDb = require("./connection/connection");
    const app = express();
    var jsonParser = bodyParser.json();
    var createApi = require("./generate-api/index");
    var fs = require('fs')

    var product = require("./api/product/controller/index");
    var {doPlural,deletefromArray} = require('./util')
    connectDb({
    url: "mongodb+srv://waka:waka@cluster0.jtleo.mongodb.net/test1",
    });
    app.use(cors());
    app.get("/apinames", (req, res) => {
    mongoose.connection.db.listCollections().toArray((err, names) => {
        res.send(names.map((item) => item.name));
    });
    });

    app.post("/createdb",jsonParser, async(req, res) => {
    const { apiname, propTitles, prop } = req.body;

    await createApi({
        apiname,
        propTitles,
        prop,
    });
    const name = doPlural(apiname,true)
    await mongoose.connection.createCollection(name)
    await res.send("Created")
    });
    app.post("/deletedb/:name", jsonParser, async (req, res) => {
        const { name } = req.params;
        const plural = doPlural(name, true);
        await mongoose.connection.dropCollection(plural);
        await deletefromArray(name);
        const path = 'api/'+ name;
        await fs.rmdirSync(path, { recursive: true });
        var  serverTemplate = require('./generate-api/config/server')
        const serverTemp = serverTemplate();
        await fs.writeFileSync("server.js", serverTemp)
        res.send("Deleted")
      });
   
      
     app.use("/products", jsonParser, product);
    app.listen(5000);
        