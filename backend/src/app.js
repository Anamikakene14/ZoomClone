import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/scoketManager.js";
import cors from "cors";


import userRountes from "./routes/users.route.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// app.set("port", (process.env.PORT || 8000))
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit :"40kb", extended: true}));

app.use("/api/v1/users",userRountes);

const start = async() =>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("")

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
//     server.listen(app.get("port"),() =>{
//             console.log("Listing on port 8000");
//         });

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is listening on port ${PORT}`);
    });
}

start();
