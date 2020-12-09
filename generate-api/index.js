var fs = require("fs");
var routeTemplate = require("./config/route");
var controllerTemplate = require("./config/controller");
var modelTemplate = require("./config/model");
var serverTemplate = require("./config/server");
var configTemplate = require("./config/config");
var connectionTemplate = require("./config/connection");
const connectiontemplate = require("./config/connection");
const createApi = async ({ apiname, prop, url }) => {
  if (fs.existsSync("config.json")) {
  } else {
    await fs.writeFileSync("config.json", JSON.stringify([]));
  }
  await configTemplate({ name: apiname });
  await fs.mkdirSync("api", { recursive: true });
  await fs.mkdirSync(`api/${apiname}/controller`, { recursive: true });
  await fs.mkdirSync(`api/${apiname}/models`, { recursive: true });
  await fs.mkdirSync(`connection`, { recursive: true });
  const connectTemp = connectiontemplate();
  const serverTemp = serverTemplate(url);

  const controllerTemp = controllerTemplate({
    apiname,
    prop: Object.keys(prop),
  });

  const modelTemp = modelTemplate({
    name: apiname,
    prop: prop,
  });
  await fs.writeFileSync("server.js", serverTemp);
  await fs.writeFileSync(`api/${apiname}/controller/index.js`, controllerTemp);
  await fs.writeFileSync(`api/${apiname}/models/${apiname}.js`, modelTemp);
  await fs.writeFileSync(`connection/connection.js`, connectTemp);

  await console.log(`You created api: ${apiname}`);
};
module.exports = createApi;
