import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import BikeRoute from './routes/BikeRoute.js'
import 'dotenv/config'
import { ConnectTodb } from './config/db.js';
import cookieParser from 'cookie-parser';
import ConnectCloudinary from './config/cloudinary.js';

 

const app=express();
app.use(cors({
  origin: (origin, callback) => {
    // If there is no origin (for non-browser requests), allow it
    if (!origin || origin === 'null') {
      return callback(null, true);
    }

    // Allow all origins
    return callback(null, origin);
  },
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());
app.use(cookieParser());
await ConnectTodb();
await ConnectCloudinary();

app.use('/user',userRoute)
app.use('/bike',BikeRoute)
//Route
app.get('/',(req,res)=>{
    res.send('Api working')
})




const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`);
    
});
