import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../atoms/Input'
import CIcon from '@coreui/icons-react'
import { cilUser, cilLockLocked } from '@coreui/icons'
import type { LoginFormValues, Props } from '../../types/userTypes'
import { CButton } from '@coreui/react'
import logo from '../../../../assets/img/logo-chatbot.webp'


const LoginForm: React.FC<Props> = ({ onSubmit, loading, error }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{borderRadius: '100%', padding: '8px', backgroundColor: '#ffffff', display: 'inline-block'}}>
            <img
              src={logo}
              alt="Logo"
              style={{ maxHeight: 92, width: "auto", maxWidth: "100%" }}
            />
          </div>
      </div>
      <b>Bienvenido. Ingrese al sistema.</b>
      <br/><br/>

      <Input
        {...register('username', { required: 'Username is required' })}
        placeholder="Username"
        autoComplete="username"
        icon={<CIcon icon={cilUser} />}
      />
      {errors.username && <span style={{color: 'red'}}>{errors.username.message}</span>}

      <Input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        icon={<CIcon icon={cilLockLocked} />}
      />
      {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}

      {/* Error de autenticación */}
      {error && <div style={{color: 'red'}}>{error}</div>}

      {/* Botón de enviar */}
      <div className="d-flex justify-content-end align-items-center mt-4">
        <CButton type="submit" color="primary" disabled={loading}>
          {loading ? 'Loading...' : 'Ingresar'}
        </CButton>
      </div>
    </form>
  )
}

export default LoginForm
