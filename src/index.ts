import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import { router } from "./routes";
import { KnownError } from "./errors/KnownError";

const app = express();
app.use(express.json());
app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof KnownError) {
      return response.status(error.status).json({ message: error.message });
    }
    return response.status(500).json(error);
  }
);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
