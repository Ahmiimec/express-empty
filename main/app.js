import express from 'express';
import {default as loaders} from '../loaders/loaders';

async function startServer () {
  const app = express();
  await loaders(app)

  const port = 5000;

  app.listen(port, () => {
      console.log("Server is listening on port " + port);
  }).on('error', (err) => {
      console.error("Error occurred during starting of server" + err);
  });
}

startServer();

