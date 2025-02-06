import express from 'express';
import {port} from './config.js';
import userRoutes from "./routes/users.routes.js";
const app = express()

app.use(userRoutes);

app.listen(port)
console.log("server on port", port )