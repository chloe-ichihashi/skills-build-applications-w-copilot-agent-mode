import mongoose, { Schema } from 'mongoose';
const TeamSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    members: [{ type: String, trim: true }],
    captain: { type: String, required: true, trim: true },
}, { timestamps: true });
export const TeamModel = mongoose.model('Team', TeamSchema);
