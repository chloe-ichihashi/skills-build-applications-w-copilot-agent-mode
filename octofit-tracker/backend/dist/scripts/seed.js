import mongoose from 'mongoose';
import { connectToDatabase } from '../config/database.js';
import { UserModel } from '../models/User.js';
import { TeamModel } from '../models/Team.js';
import { ActivityModel } from '../models/Activity.js';
import { LeaderboardEntryModel } from '../models/LeaderboardEntry.js';
import { WorkoutModel } from '../models/Workout.js';
/**
 * Seed command description:
 * Run this script to populate the octofit_db database with sample users, teams, activities,
 * leaderboard entries, and workouts for local development.
 */
const seed = async () => {
    await connectToDatabase();
    await Promise.all([
        UserModel.deleteMany({}),
        TeamModel.deleteMany({}),
        ActivityModel.deleteMany({}),
        LeaderboardEntryModel.deleteMany({}),
        WorkoutModel.deleteMany({}),
    ]);
    const users = await UserModel.insertMany([
        {
            username: 'maya',
            email: 'maya@example.com',
            passwordHash: 'demo-hash-1',
            profile: { fullName: 'Maya Chen', fitnessGoal: 'Build endurance' },
        },
        {
            username: 'leo',
            email: 'leo@example.com',
            passwordHash: 'demo-hash-2',
            profile: { fullName: 'Leo Martinez', fitnessGoal: 'Gain strength' },
        },
        {
            username: 'sara',
            email: 'sara@example.com',
            passwordHash: 'demo-hash-3',
            profile: { fullName: 'Sara Khan', fitnessGoal: 'Improve mobility' },
        },
    ]);
    await TeamModel.insertMany([
        {
            name: 'Ocean Striders',
            description: 'Endurance-focused training group',
            members: users.slice(0, 2).map((user) => user.username),
            captain: users[0].username,
        },
        {
            name: 'Peak Builders',
            description: 'Strength and conditioning team',
            members: [users[2].username],
            captain: users[1].username,
        },
    ]);
    await ActivityModel.insertMany([
        {
            userId: users[0].id,
            type: 'Run',
            durationMinutes: 35,
            calories: 320,
            notes: 'Morning jog',
            date: new Date('2026-07-01T07:00:00.000Z'),
        },
        {
            userId: users[1].id,
            type: 'Strength',
            durationMinutes: 50,
            calories: 410,
            notes: 'Upper body workout',
            date: new Date('2026-07-01T18:30:00.000Z'),
        },
        {
            userId: users[2].id,
            type: 'Yoga',
            durationMinutes: 30,
            calories: 180,
            notes: 'Mobility flow',
            date: new Date('2026-07-02T06:45:00.000Z'),
        },
    ]);
    await LeaderboardEntryModel.insertMany([
        { userId: users[0].id, score: 980, rank: 1 },
        { userId: users[1].id, score: 940, rank: 2 },
        { userId: users[2].id, score: 900, rank: 3 },
    ]);
    await WorkoutModel.insertMany([
        { name: 'Tempo Run', type: 'Cardio', durationMinutes: 30, difficulty: 'intermediate', notes: 'Build pace' },
        { name: 'Full Body Strength', type: 'Strength', durationMinutes: 45, difficulty: 'advanced', notes: 'Compound lifts' },
        { name: 'Mobility Flow', type: 'Recovery', durationMinutes: 20, difficulty: 'beginner', notes: 'Stretch and reset' },
    ]);
    console.log('Seed data inserted into octofit_db');
    await mongoose.disconnect();
};
seed().catch((error) => {
    console.error('Seeding failed', error);
    process.exit(1);
});
