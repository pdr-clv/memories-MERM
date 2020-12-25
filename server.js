import dotEnv from 'dotenv';
import mongoose from 'mongoose';

if (process.env.NODE_ENV !== 'production') dotEnv.config();

import app from './app.js';

const CONNECTION_URL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.e146p.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));
mongoose.set('useFindAndModify', false);

//15:51