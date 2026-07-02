import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/api.js';
const app = express();
const port = Number(process.env.PORT || 8000);
app.use(express.json());
app.use('/api', apiRoutes);
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db');
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('MongoDB connection failed', error);
    }
    app.listen(port, () => {
        console.log(`Backend listening on port ${port}`);
    });
};
startServer();
