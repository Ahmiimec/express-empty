import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from 'socket.io';
import { createServer } from 'http';
import { MongoClient } from 'mongodb';
import chatRoutes from '../routes/chat.routes'

let app = express();

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const uri='mongodb+srv://ahmedUser:ahmedPass@cluster0.5a18h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoDb=MongoClient.connect(uri,{useUnifiedTopology: true
  },)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('chatDB')
    const chatLogsCollection = db.collection('chatLogs')
    db.collection('chatLogs').insertOne({name: "Ahmed"})
  })
  .catch(error => console.error(error))

app.use("/api/chat/", chatRoutes)

//Websockets
var woosh = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});
const socketio = new Server(woosh,{
    cors: {
        origin:'*'
    }
});
socketio.listen(woosh)
socketio.on('connection' , (socket)=>{
    // socket.join ('room1')
    console.log("Connection made succesful")
    socket.on('message',payload=>{
        console.log("message Recieved" , payload)
        socketio.emit('message' , payload)
    })
})
app.use(cors());

export default app;