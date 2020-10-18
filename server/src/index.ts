import "reflect-metadata";
import { createConnection } from "typeorm";
import { connectionOptions } from "./ormconfig";
import { Application, Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as morgan from "morgan";

//import { User } from "./entity/User";

createConnection(connectionOptions)
  .then(async (connection) => {
    const app: Application = express();
    app.use(morgan("dev"));
    app.use(
      cors({
        origin: ["http://localhost:3000", "https://type-gg.vercel.app"],
        methods: ["GET", "POST"],
        credentials: true,
      })
    );
    app.use(bodyParser.json());

    app.listen(4000, () => {
      console.log(`app is listening is PORT 3000`);
    });
  })
  .catch((error) => console.log(error));
