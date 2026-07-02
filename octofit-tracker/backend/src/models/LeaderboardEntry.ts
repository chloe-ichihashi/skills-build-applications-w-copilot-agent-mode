import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userId: string;
  score: number;
  rank: number;
}

const LeaderboardEntrySchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: String, required: true, trim: true },
    score: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const LeaderboardEntryModel: Model<ILeaderboardEntry> = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', LeaderboardEntrySchema);
