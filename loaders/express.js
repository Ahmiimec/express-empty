import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import index from '../routes/index.routes'

export default (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());

    app.use("/api/", index)

}