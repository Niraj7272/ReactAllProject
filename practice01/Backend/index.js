import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import categoryRoute from './router/categoryRoute.js'
import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'

configDotenv();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/",categoryRoute);
app.use("/", userRoute);
app.use("/",productRoute);


app.listen(port,()=>{
    console.log(`Server is started at port: ${port}`);
});