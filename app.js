const express = require("express");
const cloudService = require("./client-cloud-services");

const app = express();
const config = {
  identity: "",
  credential: "",
  labelContainer: "",
  region: "us-east-2",
};

let client = cloudService.init("aws");
let storage = new client(config);
app.get("/upload", storage.upload(config.labelContainer, "sdk.json"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
