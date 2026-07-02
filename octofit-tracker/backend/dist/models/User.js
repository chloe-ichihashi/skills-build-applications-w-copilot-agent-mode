import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    profile: {
        fullName: { type: String, default: '' },
        fitnessGoal: { type: String, default: 'Stay active' },
    },
}, { timestamps: true });
export const UserModel = mongoose.model('User', UserSchema);
