import { useContext } from 'react'

import { AuthContext } from '../main'

export const useAuth = () => {
  const isAuth = useContext(AuthContext)
  console.log(isAuth)

  return {
    isAuth,
  }
}
