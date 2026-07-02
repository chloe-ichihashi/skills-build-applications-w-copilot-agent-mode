import mongoose, { Schema } from 'mongoose';
const LeaderboardEntrySchema = new Schema({
    userId: { type: String, required: true, trim: true },
    score: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
}, { timestamps: true });
export const LeaderboardEntryModel = mongoose.model('LeaderboardEntry', LeaderboardEntrySchema);
