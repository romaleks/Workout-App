import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'
import Statistics from '../profile/statistics/Statistics'

import styles from './Home.module.scss'

function Home() {
  const { isAuth } = useAuth

  const navigate = useNavigate()

  return (
    <Layout bgImage='/images/home-bg.jpg'>
      <Button clickHandler={() => navigate('/new-workout')}>New</Button>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      <Statistics />
    </Layout>
  )
}

export default Home
