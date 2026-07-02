import mongoose from 'mongoose';
const defaultMongoUri = 'mongodb://127.0.0.1:27017/octofit_db';
export const connectToDatabase = async (uri = defaultMongoUri) => {
    await mongoose.connect(uri);
    return mongoose.connection;
};
