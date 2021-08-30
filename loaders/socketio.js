import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

 const socketIo = async (app) => {
    let woosh = app.listen(4000, () => {
        console.log('listening for Sockets on port 4000,');
    });
    const socketio = new Server(woosh, {
        cors: {
            origin: '*'
        }
    });
    socketio.listen(woosh)
    socketio.on('connection', (socket) => {
        // socket.join ('room1')
        console.log("Connection made succesful")
        socket.on('message', payload => {
            console.log("message Recieved", payload)
            socketio.emit('message', payload)
        })
    })
}

export default socketIo