var fs = require("fs");
const serverTemplate = (url) => {
  const result = fs.readFileSync("config.json", "utf-8", (res) => {
    return res;
  });
  const data = JSON.parse(result);
  let urls = JSON.stringify(url);
  return `
    var express = require("express");
    var helmet = require("helmet");
    var mongoose = require("mongoose");
    var bodyParser = require("body-parser");
    var cors = require("cors");
    var connectDb = require("./connection/connection");
    const app = express();
    var jsonParser = bodyParser.json();
    var createApi = require("wakapi/generate-api/index");
    var fs = require('fs')

    ${data
      .map((item) => `var ${item} = require("./api/${item}/controller/index");`)
      .join("\n")}
    var { doPlural, deletefromArray } = require("wakapi/util");
    connectDb({
    url: ${urls},
    });
    app.use(helmet());
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
   
      
    ${data
      .map((item) => ` app.use("/${item}s", jsonParser, ${item});`)
      .join("\n")}
    app.listen(5000);
        `;
};

module.exports = serverTemplate;
