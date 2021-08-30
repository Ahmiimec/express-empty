import socketLoader from './socketio';
import databaseLoader from './mongo';
import expressLoader from './express';

export default async (expressApp)  => {
    try {
        await databaseLoader;
        console.log("MongoDB is connected");
        try{
            await socketLoader(expressApp);
            console.log("SocketIO is connected");
        } catch(err){
            console.log("Could not connect to SocketIO", err);
        }
    } catch(err) {
        console.log("Could not connect to mongoose", err);
    }
    await expressLoader(expressApp);
    console.log("Express is loaded");
}   