import { HiOutlineArrowLeft } from 'react-icons/hi'
import { HiOutlineUser } from 'react-icons/hi2'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
  const { isAuth } = useAuth()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      {pathname !== '/' ? (
        <button
          onClick={() => {
            navigate(backLink)
          }}
        >
          <HiOutlineArrowLeft color='white' size={35} />
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(isAuth ? '/profile' : '/auth')
          }}
        >
          <HiOutlineUser color='white' size={35} />
        </button>
      )}
      <Hamburger />
    </header>
  )
}

export default Header
