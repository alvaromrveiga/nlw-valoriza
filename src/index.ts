import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import { router } from "./routes";
import { KnownError } from "./errors/KnownError";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof KnownError) {
      return response.status(error.status).json({ message: error.message });
    }
    return response.status(500).json(error);
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
