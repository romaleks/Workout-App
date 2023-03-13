import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import WorkoutService from '../../../services/workout/workout.service'

export const useNewWorkout = () => {
  const { mutate, isSuccess, isLoading, error } = useMutation(
    ['create workout'],
    body => WorkoutService.create(body),
    {
      onSuccess: () => {
        reset({
          name: '',
          exerciseIds: [],
        })
      },
    }
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ mode: 'onChange' })

  const onSubmit = data => {
    mutate({
      name: data.name,
      exerciseIds: data.exerciseIds.map(ex => ex.value),
    })
  }

  return {
    isSuccess,
    isLoading,
    error,
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
  }
}
