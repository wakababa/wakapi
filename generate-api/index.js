const fs = require("fs");
const routeTemplate = require("./config/route");
const controllerTemplate = require("./config/controller");
const modelTemplate = require("./config/model");
const serverTemplate = require("./config/server");
const configTemplate = require("./config/config");
const dbConnectionTemplate = require("./config/connection");
const createApi = async ({ apiname, prop, url }) => {
  if (fs.existsSync("config.json")) {
  } else {
    await fs.writeFileSync("config.json", JSON.stringify([]));
  }
  await configTemplate({ name: apiname });
  await fs.mkdirSync("api", { recursive: true });
  await fs.mkdirSync(`api/${apiname}/controller`, { recursive: true });
  await fs.mkdirSync(`api/${apiname}/models`, { recursive: true });
  await fs.mkdirSync(`api/${apiname}/routes`, { recursive: true });

  await fs.mkdirSync(`connection`, { recursive: true });
  const connectTemp = dbConnectionTemplate();
  const serverTemp = serverTemplate(url);
  const routeTemp = routeTemplate({ apiname });
  const controllerTemp = controllerTemplate({
    apiname,
    prop: Object.keys(prop),
  });

  const modelTemp = modelTemplate({
    name: apiname,
    prop: prop,
  });
  await fs.writeFileSync("server.js", serverTemp);
  await fs.writeFileSync(".env",`
  PORT= 5000
  URL = ${url}
  `);
  await fs.writeFileSync(`api/${apiname}/controller/index.js`, controllerTemp);
  await fs.writeFileSync(`api/${apiname}/models/${apiname}.js`, modelTemp);
  await fs.writeFileSync(
    `api/${apiname}/routes/index.json`,
    JSON.stringify(routeTemp)
  );
  await fs.writeFileSync(`connection/connection.js`, connectTemp);

  await console.log(`You created api: ${apiname}`);
};

module.exports = { createApi };
