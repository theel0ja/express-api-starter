import express from "express";

import dotenv from "dotenv";
dotenv.config();

import {
  HomeController,
} from "./controllers";

/**
 * Create a new express application instance
 */
const app: express.Application = express();

/**
 * Controllers and routes
 */
app.use("/", HomeController);

export default app;
