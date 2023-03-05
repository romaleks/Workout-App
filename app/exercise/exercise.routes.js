import express from 'express'
import { createNewExercise } from './exercise.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise)

export default router
