import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import { useAuthPage } from '../../../hooks/useAuthPage'

import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'

const Auth = () => {
  const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
    useAuthPage()

  return (
    <>
      <Layout heading='Sign in' bgImage={'/images/auth-bg.png'}></Layout>
      <div className='wrapper-inner-page'>
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            name='email'
            register={register}
            options={{
              required: 'Email is required',
            }}
            type='email'
            placeholder='Enter email'
          />
          <Field
            error={errors?.password?.message}
            name='password'
            register={register}
            options={{
              required: 'Password is required',
            }}
            type='password'
            placeholder='Enter Password'
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('login')}>Sign in</Button>
            <Button clickHandler={() => setType('register')}>Sign up</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
