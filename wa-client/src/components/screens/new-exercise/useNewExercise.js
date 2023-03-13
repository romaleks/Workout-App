import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import ExerciseService from '../../../services/exercise/exercise.service'

export const useNewExercise = () => {
  const { mutate, isSuccess, isLoading, error } = useMutation(
    ['create exercise'],
    body => ExerciseService.create(body),
    {
      onSuccess: () => {
        reset()
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
    mutate(data)
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
