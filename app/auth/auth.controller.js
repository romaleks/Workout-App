// @desc   Auth user
// @route  POST /api/users/login
// @access Pubic
export const authUser = async (req, res) => {
	res.json({ message: 'You are authenticated' })
}
