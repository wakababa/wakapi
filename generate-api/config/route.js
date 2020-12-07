var { doCapital } = require("../../util");
const routeTemplate = ({ apiname }) => {
  const pathurl = `/${apiname}`;
  const data = {
    routes: [
      {
        method: "GET",
        path: pathurl.toString(),
        handler: "/" + doCapital(apiname) + ".find",
        config: {
          policies: [],
        },
      },
      {
        method: "POST",
        path: pathurl.toString(),
        handler: "/" + doCapital(apiname) + ".post",
        config: {
          policies: [],
        },
      },
    ],
  };

  return data;
};

module.exports = routeTemplate;
