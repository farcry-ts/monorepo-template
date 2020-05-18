import express from "express";
import bodyParser from "body-parser";
import rpc from "./rpc";

const app = express();
app.use("/rpc", bodyParser.json(), rpc.middleware());
app.listen(8080);
