import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  calories: number;
  notes: string;
  date: Date;
}

const ActivitySchema = new Schema<IActivity>(
  {
    userId: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    calories: { type: Number, default: 0, min: 0 },
    notes: { type: String, default: '' },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const ActivityModel: Model<IActivity> = mongoose.model<IActivity>('Activity', ActivitySchema);
