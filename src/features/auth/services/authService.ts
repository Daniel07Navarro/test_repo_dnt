import axios from 'axios'
import { LOGIN_URL } from '../../../shared/constants/environment'
import type { LoginResponse } from '../types/userTypes'

/**
 * authService
 * - Servicio de autenticación para login.
 * - Usa Axios para enviar credenciales al backend.
 * - Valida el código de respuesta y retorna el usuario autenticado.
 */
const authService = { 
  /**
   * Envia una solicitud POST para autenticación del usuario.
   * @param username - Nombre de usuario
   * @param password - Contraseña del usuario
   * @returns LoginResponse con token y datos del usuario
   */
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
      LOGIN_URL,
      { username, password },
      { headers: { 'Content-Type': 'application/json' } },
    )
    // if (response.data.code !== 200) {
    //   throw new Error('Login failed')
    // }
    return response.data
  }, 
}

export default authService



// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: 'https://tu-api.com/api', // URL base de tu API
// });

// // El interceptor se ejecuta ANTES de cada petición que hagas con `apiClient`.
// apiClient.interceptors.request.use(
//   (config) => {
//     // 1. Busca el token en localStorage
//     const token = localStorage.getItem('token');

//     // 2. Si el token existe, lo añade a la cabecera 'Authorization'
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config; // 3. Devuelve la configuración modificada para que la petición continúe
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default apiClient;