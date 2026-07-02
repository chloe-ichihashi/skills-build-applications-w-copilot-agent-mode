import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  type: string;
  durationMinutes: number;
  difficulty: string;
  notes: string;
}

const WorkoutSchema = new Schema<IWorkout>(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    difficulty: { type: String, default: 'beginner', trim: true },
    notes: { type: String, default: '' },
  },
  { timestamps: true },
);

export const WorkoutModel: Model<IWorkout> = mongoose.model<IWorkout>('Workout', WorkoutSchema);
