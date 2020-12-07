var createApi = require("./generate-api/index");
createApi({
  apiname: "product",
  propTitles: ["title", "price", "quantity"],
  prop: {
    title: "String",
    price: "Number",
    quantity: "Number",
  },
});
