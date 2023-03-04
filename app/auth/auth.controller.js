import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'
import { faker } from '@faker-js/faker'
import { hash } from 'argon2'
import { generateToken } from './generate-token.js'
import { UserFields } from '../utils/user.utils.js'

// @desc   Auth user
// @route  POST /api/auth/login
// @access Pubic
export const authUser = asyncHandler(async (req, res) => {
	res.json(user)
})

// @desc   Register user
// @route  POST /api/auth/register
// @access Pubic
export const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const isHaveUser = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await prisma.user.create({
		data: {
			email,
			password: await hash(password),
			name: faker.name.fullName()
		},
		select: UserFields
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})
