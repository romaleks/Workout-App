import { CgClose, CgMenuRight } from 'react-icons/cg'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	return (
		<div ref={ref} className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<CgClose color='white' size={35} />
				) : (
					<CgMenuRight color='white' size={35} />
				)}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
