import { Router } from 'express';
import { UserModel } from '../models/User.js';
import { TeamModel } from '../models/Team.js';
import { ActivityModel } from '../models/Activity.js';
import { LeaderboardEntryModel } from '../models/LeaderboardEntry.js';
import { WorkoutModel } from '../models/Workout.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

router.get('/users', async (_req, res) => {
  const users = await UserModel.find().lean();
  res.json(users);
});

router.post('/users', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
});

router.get('/teams', async (_req, res) => {
  const teams = await TeamModel.find().lean();
  res.json(teams);
});

router.post('/teams', async (req, res) => {
  const team = await TeamModel.create(req.body);
  res.status(201).json(team);
});

router.get('/activities', async (_req, res) => {
  const activities = await ActivityModel.find().sort({ date: -1 }).lean();
  res.json(activities);
});

router.post('/activities', async (req, res) => {
  const activity = await ActivityModel.create(req.body);
  res.status(201).json(activity);
});

router.get('/leaderboard', async (_req, res) => {
  const leaderboard = await LeaderboardEntryModel.find().sort({ rank: 1 }).lean();
  res.json(leaderboard);
});

router.post('/leaderboard', async (req, res) => {
  const entry = await LeaderboardEntryModel.create(req.body);
  res.status(201).json(entry);
});

router.get('/workouts', async (_req, res) => {
  const workouts = await WorkoutModel.find().lean();
  res.json(workouts);
});

router.post('/workouts', async (req, res) => {
  const workout = await WorkoutModel.create(req.body);
  res.status(201).json(workout);
});

export default router;
