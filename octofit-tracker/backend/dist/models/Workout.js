import mongoose, { Schema } from 'mongoose';
const WorkoutSchema = new Schema({
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    difficulty: { type: String, default: 'beginner', trim: true },
    notes: { type: String, default: '' },
}, { timestamps: true });
export const WorkoutModel = mongoose.model('Workout', WorkoutSchema);
