const dayjs = require("dayjs");

module.exports = {
  "GET /"(req, res) {
    return "hello world";
  },
  "GET /rest/cities": require("./rest/cities.json"), //注意这里是使用/rest/cities来访问，不是/rest/cities.json，后者会报错
  "GET /rest"(req, res) {
    return res.json({
      status: 200,
      data: "hello heyzqt"
    });
  }
};
