import express from 'express'
import morgan from 'morgan';
import path from 'path'
import connectDB from './config/database.js';
import parentRouter from './routers/parentRouter.js'
import cors from 'cors';

// database connectivity, middlewares and routers for setting up server
const app = express();
connectDB();
app.use(cors());
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))

app.use('/api', parentRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));