const express = require("express");
const path = require("path");
const apiMocker = require("mocker-api");

const app = express();

apiMocker(app, path.resolve("./mocker/mocker.js"));

app.listen(8080, () => {
  console.log("Example app listening on port 8080");
}); //启动服务

//第一个参数请求路径，第二个参数callback
// app.get("/", (request, response) => {
//   response.status(200);
//   response.send("hello express");
//   response.end();
// });

// app.get("/rest", (request, response) => {
//   response.json({
//     result: 1,
//     msg: "hello express 000"
//   });
// });
