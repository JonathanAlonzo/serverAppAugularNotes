import Conn from "./models/server";
import * as dotenv from 'dotenv';

//Should show the PORT 3000 from .env file
dotenv.config();

const server = new Conn();