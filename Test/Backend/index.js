import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'

configDotenv();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/",userRoute);


app.listen(port,()=>{
    console.log(`Server is started at Port:${port}`);
})
