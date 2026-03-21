import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../services/authService'
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice'

/**
 * Custom hook: `useLogin`
 * - Encapsula la lógica de inicio de sesión.
 * - Administra estado local `loading` y `error`.
 * - Dispara acciones de Redux (`loginStart`, `loginSuccess`, `loginFailure`).
 * - Redirige al usuario al dashboard si el login es exitoso.
 */
export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  /**
   * Ejecuta la lógica de login:
   * - Llama al servicio de autenticación.
   * - Actualiza el estado global con los datos del usuario.
   * - Redirige al dashboard.
   */
  const login = async (data: { username: string; password: string }) => {
    setLoading(true)
    setError(null)
    dispatch(loginStart())
    try {
      const response = await authService.login(data.username, data.password)
      
      console.log("login response: ", response);
      
      dispatch(loginSuccess({
        token: response.token
      }))
      navigate('/dashboard')
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('Login failed')
      }
      dispatch(loginFailure())
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}
