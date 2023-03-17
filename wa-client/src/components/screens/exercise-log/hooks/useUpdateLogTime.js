import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogTime = times => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { completeLog, errorCompleted } = useCompleteLog()

  const { mutate, error: errorChange } = useMutation(
    ['update log time'],
    ({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['get exercise log', id])
      },
    }
  )

  return { updateTime: mutate, error: errorChange || errorCompleted }
}
