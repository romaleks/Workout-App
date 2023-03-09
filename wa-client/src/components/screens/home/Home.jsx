import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
  const { isAuth } = useAuth

  const navigate = useNavigate()

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button
        clickHandler={() =>
          isAuth ? navigate('/new-workout') : navigate('/auth')
        }
      >
        {isAuth ? 'New' : 'Sign in'}
      </Button>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      {/* Counters */}
    </Layout>
  )
}

export default Home
