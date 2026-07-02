import mongoose, { Schema } from 'mongoose';
const ActivitySchema = new Schema({
    userId: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    calories: { type: Number, default: 0, min: 0 },
    notes: { type: String, default: '' },
    date: { type: Date, default: Date.now },
}, { timestamps: true });
export const ActivityModel = mongoose.model('Activity', ActivitySchema);
