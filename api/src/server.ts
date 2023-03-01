// connect database
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app';

dotenv.config();
const port = 8002;
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(()=> {
    app.listen(port, () => {
        console.log(`MongoDB connected. Server is on ${port}`)
    })
  })
  .catch((error:Error) => {
    console.log(error.message)
    process.exit(1)
  });
