import { HiOutlineArrowLeft } from 'react-icons/hi'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = () => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<HiOutlineArrowLeft color='white' size={35} />
			</button>
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header
