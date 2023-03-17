import { CgClose, CgMenuRight } from 'react-icons/cg'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
  const { isShow, setIsShow, ref } = useOnClickOutside(false)

  return (
    <div ref={ref} className={styles.wrapper}>
      <button aria-label='Toggle menu' onClick={() => setIsShow(!isShow)}>
        {isShow ? <CgClose size={35} /> : <CgMenuRight size={35} />}
      </button>
      <Menu isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default Hamburger
