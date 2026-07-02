import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  profile: {
    fullName: string;
    fitnessGoal: string;
  };
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    profile: {
      fullName: { type: String, default: '' },
      fitnessGoal: { type: String, default: 'Stay active' },
    },
  },
  { timestamps: true },
);

export const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
