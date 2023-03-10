import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'

const Auth = () => {
  const [type, setType] = useState('auth')
  const isLoading = false
  const isLoadingAuth = false

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <Layout heading='Sign in' bgImage={'/images/auth-bg.png'}>
        {' '}
      </Layout>
      <div className='wrapper-inner-page'>
        {(isLoading || isLoadingAuth) && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            name='email'
            register={register}
            options={{
              required: 'Email is required',
            }}
            type='text'
            placeholder='Enter email'
          />
          <Field
            error={errors?.password?.message}
            name='password'
            register={register}
            options={{
              required: 'Password is required',
            }}
            type='text'
            placeholder='Enter Password'
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('auth')}>Sign in</Button>
            <Button clickHandler={() => setType('register')}>Sign up</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
