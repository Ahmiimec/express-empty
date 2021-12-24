import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import indexRoutes from '../routes/index.routes'

let app = express();

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use("/api/", indexRoutes)
app.use(cors());

export default app;