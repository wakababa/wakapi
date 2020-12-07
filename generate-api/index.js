var fs = require("fs");
var routeTemplate = require("./config/route");
var controllerTemplate = require("./config/controller");
var modelTemplate = require("./config/model");
var serverTemplate = require("./config/server");
var configTemplate = require("./config/config");
const createApi = async ({ apiname, propTitles, prop }) => {
  if (fs.existsSync("config.json")) {
  } else {
    await fs.writeFileSync("config.json", JSON.stringify([]));
  }
  await configTemplate({ name: apiname });
  await fs.mkdirSync("api", { recursive: true });
  await fs.mkdirSync(`api/${apiname}/controller`, { recursive: true });
  await fs.mkdirSync(`api/${apiname}/models`, { recursive: true });
  const serverTemp = serverTemplate();
  

  const controllerTemp = controllerTemplate({
    apiname,
    prop: propTitles,
  });

  const modelTemp = modelTemplate({
    name: apiname,
    prop: prop,
  });
  await fs.writeFileSync("server.js", serverTemp)
  await fs.writeFileSync(`api/${apiname}/controller/index.js`, controllerTemp);
  await fs.writeFileSync(`api/${apiname}/models/${apiname}.js`, modelTemp);
  await console.log(`You created api: ${apiname}`);

 
};
module.exports = createApi;

