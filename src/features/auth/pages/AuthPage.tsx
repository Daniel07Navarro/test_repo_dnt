import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import { useLogin } from '../hooks/useLogin'
import LoginCard from '../components/organisms/LoginCard'

/**
 * Página de autenticación (Login).
 * - Renderiza el formulario de inicio de sesión encapsulado en un `LoginCard`.
 * - Utiliza `useLogin`, un custom hook que maneja el estado de autenticación (submit, loading, error).
 * - Está estilizada con CoreUI y centrada verticalmente.
 */
const AuthPage: React.FC = () => {
  const { login, loading, error } = useLogin()

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center bg-login-page">
      <CContainer>
        <CRow className="justify-content-center p-3">
          <CCol md={8} className='login-card'>
            <LoginCard onSubmit={login} loading={loading} error={error || undefined} />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AuthPage
