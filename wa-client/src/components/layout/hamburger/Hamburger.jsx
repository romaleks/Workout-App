import { useState } from 'react'
import styles from './Hamburger.module.scss'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import Menu from './Menu'

const Hamburger = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.wrapper}>
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
