import { HiOutlineArrowLeft } from 'react-icons/hi'
import { HiOutlineUser } from 'react-icons/hi2'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { isAuth } = useAuth()

  if (!isAuth) return null

  return (
    <header className={styles.header}>
      {isAuth && (
        <>
          {pathname === '/' && isAuth ? (
            <button
              onClick={() => {
                navigate('/profile')
              }}
            >
              <HiOutlineUser color='white' size={35} />
            </button>
          ) : (
            <button
              onClick={() => {
                navigate(isAuth ? backLink : '/auth')
              }}
            >
              <HiOutlineArrowLeft color='white' size={35} />
            </button>
          )}
          <Hamburger />
        </>
      )}
    </header>
  )
}

export default Header
