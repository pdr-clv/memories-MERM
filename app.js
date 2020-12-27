import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import postsRoutes from './backend/routes/postsRoutes.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRoutes);

//setting static webpages.
if (process.env.NODE_ENV === 'production') {
  /*app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });*/
  const __dirname = path.resolve();
  app.use(express.static(`${__dirname}/client/build`));
  app.get('*', (req,res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

export default app;

//15:51