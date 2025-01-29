import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB';
dotenv.config();

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL

}))
app.use(express.json());
app.use(cookieParser());
app.use (morgan());
app.use(helmet({
    crossOriginResourcePolicy: false
}));

app.get("/", (req, res) => {
    //server to client side
    res.json({
        message: "Server is running" + process.env.PORT
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});