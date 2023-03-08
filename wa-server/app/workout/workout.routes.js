import express from 'express'
import {
  createNewWorkout,
  deleteWorkout,
  getWorkouts,
  updateWorkout,
  getWorkout,
} from './workout.controller.js'
import { createNewWorkoutLog } from './log/workout-log.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { getWorkoutLog } from './log/get-workout-log.controller.js'
import { completeWorkoutLog } from './log/update-workout-log.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout).get(protect, getWorkouts)
router
  .route('/:id')
  .get(protect, getWorkout)
  .put(protect, updateWorkout)
  .delete(protect, deleteWorkout)
router
  .route('/log/:id')
  .get(protect, getWorkoutLog)
  .post(protect, createNewWorkoutLog)
router.route('/log/complete/:id').patch(protect, completeWorkoutLog)

export default router
