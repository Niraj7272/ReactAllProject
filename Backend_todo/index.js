import express from 'express'
import userRoute from './router/userRoute.js'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import fileRoute from './router/fileRoute.js'
import addUserRoute from './router/addUserRoute.js'

configDotenv();

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/",userRoute);
app.use("/",fileRoute);
app.use("/",addUserRoute);



app.listen(port, ()=>{
    console.log(`server is starded at port: ${port}`);
});
