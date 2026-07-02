import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description: string;
  members: string[];
  captain: string;
}

const TeamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: '' },
    members: [{ type: String, trim: true }],
    captain: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const TeamModel: Model<ITeam> = mongoose.model<ITeam>('Team', TeamSchema);
