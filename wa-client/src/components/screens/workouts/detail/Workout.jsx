import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Loader from '../../../ui/Loader'
import Button from '../../../ui/button/Button'

import WorkoutLogService from '../../../../services/workout/workout-log.service'

import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'

const Workout = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const {
    data: workoutLog,
    isSuccess,
    isLoading,
  } = useQuery(['get workout'], () => WorkoutLogService.getById(id), {
    select: ({ data }) => data,
  })

  const { mutate } = useMutation(
    ['complete workout'],
    () => WorkoutLogService.complete(id),
    {
      onSuccess: () => navigate('/workouts'),
    }
  )

  return (
    <>
      <HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
      <div
        className='wrapper-inner-page'
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: '90%', margin: '0 auto' }}>
          {/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            {workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
              <Fragment key={exerciseLog.id}>
                <ExerciseItem exerciseLog={exerciseLog} />
                {index % 2 !== 0 && index === data.exerciseLogs.length - 1 && (
                  <div className={styles.line} />
                )}
              </Fragment>
            ))}
          </div>
        )}
        <Button clickHandler={mutate}>Complete workout</Button>
      </div>
    </>
  )
}

export default Workout
