import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import AuthService from '../../../services/auth.service'

export const useAuthPage = () => {
  const [type, setType] = useState('login')

  const { isAuth, setIsAuth } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  const { mutate, isLoading } = useMutation(
    ['auth'],
    ({ email, password }) => AuthService.main(email, password, type),
    {
      onSuccess: data => {
        setIsAuth(true)
        reset()
      },
    }
  )

  const onSubmit = async data => {
    mutate(data)
  }

  return {
    setType,
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
  }
}
