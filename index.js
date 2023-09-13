import dotenv from "dotenv";
import Server from "./models/server.js";

dotenv.config();
// Otro cambio
const server = new Server();

server.setup();
