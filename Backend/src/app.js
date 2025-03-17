

import express from "express";
import {createServer} from  "node:http";
import {Server} from  "socket.io";
import mongoose from  "mongoose";
import cors from  "cors";
import {connectToSocket} from "./Controller/socketManager.js";
import userRoutes  from "./Routes/user.Routes.js";





const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8080));
app.use(cors({
    origin: "http://localhost:5173", // Allow only your frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // If sending cookies or authentication headers
  }));

app.set(cors());


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users",userRoutes);





app.get("/home",(req,res)=>{
    res.send("Home");
})


 


const start = async () => {
app.set("mongo_user")    
    const connectiionDB = await mongoose.connect("mongodb+srv://gamingbadboy:StMkhb1GwaKrxGIG@cluster0.92v0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MONGO Connected DB HOST: ${connectiionDB.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("Listening at port 8080");
    })
}
start();



