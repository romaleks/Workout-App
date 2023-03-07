import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'

// @desc    Get workout log
// @route   GET /api/workouts/log/:id
// @access  Private
export const getWorkoutLog = asyncHandler(async (req, res) => {
  const workoutLog = await prisma.workoutLog.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      workout: true,
    },
  })

  if (!workoutLog) {
    res.status(404)
    throw new Error('Workout Log not found!')
  }

  res.json(workoutLog)
})
